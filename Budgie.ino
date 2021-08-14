#define VIBE1 13
#define VIBE2 15

#define GREEN1 5
#define GREEN2 18
#define GREEN3 4
#define BLUE1 26
#define BLUE2 27
#define BLUE3 33

#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <math.h>

BLEServer* pServer = NULL;
BLECharacteristic* pCharacteristic = NULL;
bool deviceConnected = false;
bool oldDeviceConnected = false;
uint32_t value = 0;
char msg[256];
char prevMsg[256];
char msgShort = 'm';
float accelMag = 10;
float prevAccelMag = 10;
bool msgSent = false;
int ledVal = 0;

#define SERVICE_UUID        "7a4c0f42-7ecd-41e2-9358-bba672995ec2"
#define CHARACTERISTIC_UUID "50e67a59-7526-47ed-a74c-6f35e187827c"

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

Adafruit_MPU6050 mpu;

void setup() {

  pinMode(VIBE1, OUTPUT);
  pinMode(VIBE2, OUTPUT);

  ledcAttachPin(GREEN1, 1);
  ledcAttachPin(GREEN2, 2);
  ledcAttachPin(GREEN3, 3);
  ledcAttachPin(BLUE1, 4);
  ledcAttachPin(BLUE2, 5);
  ledcAttachPin(BLUE3, 6);
  ledcSetup(1, 12000, 8); // 12 kHz PWM, 8-bit resolution
  ledcSetup(2, 12000, 8);
  ledcSetup(3, 12000, 8);
  ledcSetup(4, 12000, 8);
  ledcSetup(5, 12000, 8);
  ledcSetup(6, 12000, 8);

  ledcWrite(1, 255);
  ledcWrite(2, 255);
  ledcWrite(3, 255);
  ledcWrite(4, 255);
  ledcWrite(5, 255);
  ledcWrite(6, 255);
  
  Serial.begin(115200);
  while (!Serial)
    delay(10);

  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);

  Serial.println("");
  delay(100);

  // Create the BLE Device
  BLEDevice::init("Shaker");

  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // Create a BLE Characteristic
  pCharacteristic = pService->createCharacteristic(
                      CHARACTERISTIC_UUID,
                      BLECharacteristic::PROPERTY_READ   |
                      BLECharacteristic::PROPERTY_WRITE  |
                      BLECharacteristic::PROPERTY_NOTIFY |
                      BLECharacteristic::PROPERTY_INDICATE
                    );

  // https://www.bluetooth.com/specifications/gatt/viewer?attributeXmlFile=org.bluetooth.descriptor.gatt.client_characteristic_configuration.xml
  // Create a BLE Descriptor
  pCharacteristic->addDescriptor(new BLE2902());

  // Start the service
  pService->start();

  // Start advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(false);
  pAdvertising->setMinPreferred(0x0);  // set value to 0x00 to not advertise this parameter
  BLEDevice::startAdvertising();
  Serial.println("Waiting a client connection to notify...");
}

void loop() {
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  accelMag = sqrt(a.acceleration.x * a.acceleration.x + a.acceleration.y * a.acceleration.y + a.acceleration.z * a.acceleration.z);
  //Serial.println(accelMag);
  //sprintf(msg, "%f", accelMag );
/*
  if (accelMag >= 11.0) {
    msgShort = 'm';
    sprintf(msg, "moving");
  }
    
  else {
    sprintf(msg, "not moving");
    msgShort = 'n';
  }
  */
  ledVal = 16 * a.acceleration.x + 128;
  if (ledVal > 255)
    ledVal = 255;
  if (ledVal < 0)
    ledVal = 0;
  Serial.println(ledVal);
  ledcWrite(1, ledVal);
  ledcWrite(2, ledVal);
  ledcWrite(3, ledVal);
  ledcWrite(4, 255-ledVal);
  ledcWrite(5, 255-ledVal);
  ledcWrite(6, 255-ledVal);
  
  msgShort = 'm';
  
    // notify changed value
    if (deviceConnected) {
      //Serial.println("connected");
        //pCharacteristic->setValue((uint8_t*)&value, 4);
        //if (accelMag >= 15.0) {
        //pCharacteristic->setValue(&msgShort);
        //  pCharacteristic->notify();
        //if (*msg != *prevMsg) {
        if (accelMag >= 13 && !msgSent) {
          pCharacteristic->setValue(&msgShort);
          pCharacteristic->notify();
          Serial.print(a.acceleration.x);
          Serial.print(" ");
          Serial.println(accelMag);
          digitalWrite(VIBE1, HIGH);
          digitalWrite(VIBE2, HIGH);
          msgSent = true;
        }
        if (accelMag <= 10.3) {
          msgSent = false;
          digitalWrite(VIBE1, LOW);
          digitalWrite(VIBE2, LOW);
        }
        //Serial.println(msg);
        delay(3); // bluetooth stack will go into congestion, if too many packets are sent, in 6 hours test i was able to go as low as 3ms
    }
    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
        // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }

  prevAccelMag = accelMag;
  strcpy(prevMsg, msg);
}
