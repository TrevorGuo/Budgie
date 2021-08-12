const create_element = (
  xmlDoc,
  parent,
  child,
  text = '',
  attr = '',
  attr_value = '',
) => {
  var childEle = xmlDoc.createElement(child);
  if (text != '') {
    var childText = xmlDoc.createTextNode(text);
    childEle.appendChild(childText);
  }
  if (attr != '') {
    childEle.setAttribute(attr, attr_value);
  }
  xmlDoc.getElementsByTagName(parent)[0].appendChild(childEle);
};

class Note {
  constructor(duration, rest, count) {
    this.duration = duration;
    this.rest = rest;
    this.count = count;
  }
}

function createNoteArray() {
  let counter = 0;
  let randNote;
  let randRest;
  let duration;
  const noteArray = [Note];
  while (counter < 16) {
    switch (
      counter % 4 //Allows certain notes to be generated based on where the beat is divided.
    ) {
      case 0:
        randNote = Math.floor(Math.random() * 3);
        break;
      case 1:
        randNote = Math.floor(Math.random() * 2) + 1;
        break;
      case 2:
        randNote = Math.floor(Math.random() * 2) + 1;
        break;
      case 3:
        randNote = Math.floor(Math.random()) + 2;
        break;
    }

    randRest = Math.floor(Math.random() * 4); //randomizes if there is a rest or not.
    isRest = randRest == 3;
    switch (randNote) {
      case 0:
        duration = 4;
        noteArray.push(new Note(duration, isRest, counter));
        break;
      case 1:
        duration = 2;
        noteArray.push(new Note(duration, false, counter));
        break;
      case 2:
        duration = 1;
        noteArray.push(new Note(duration, false, counter));
        break;
    }
    counter += duration;
  }
  return noteArray;
}

function createMeasure(scoreXml, num, noteArray) {
  if (num == 1) {
    create_element(scoreXml, 'part', 'measure', '', 'number', num.toString()); //set attr for first measure
    create_element(scoreXml, 'measure', 'attributes');
    create_element(scoreXml, 'attributes', 'divisions', '4');
    create_element(scoreXml, 'attributes', 'key');
    create_element(scoreXml, 'key', 'fifths', '0');
    create_element(scoreXml, 'key', 'mode', 'major');
    create_element(scoreXml, 'attributes', 'time');
    create_element(scoreXml, 'time', 'beats', '4');
    create_element(scoreXml, 'time', 'beat-type', '4');
    create_element(scoreXml, 'attributes', 'clef');
    create_element(scoreXml, 'clef', 'sign', 'percussion');
    create_element(scoreXml, 'attributes', 'staff-details');
    create_element(scoreXml, 'staff-details', 'staff-lines', '1');
  } else {
    create_element(scoreXml, 'part', 'measure', '', 'number', num.toString());
  }
  for (let i = 0; i < noteArray.length; i++) {
    note = noteArray[i];
    scoreXml
      .getElementsByTagName('measure')
      [num - 1].appendChild(create_note(note.rest, note.duration, note.count));
  }
}

function create_note(rest, duration, counter) {
  var xmlDoc = new Document().implementation.createDocument('', '', null);
  let notetype;
  let type;
  let noteEle = xmlDoc.createElement('note');
  switch (duration) {
    case 4:
      type = 'quarter';
      break;
    case 2:
      type = 'eighth';
      break;
    case 1:
      type = '16th';
      break;
  }

  function createNoteElement(
    parent,
    child,
    text = '',
    attr = '',
    attr_value = '',
  ) {
    var childEle = xmlDoc.createElement(child);
    if (text != '') {
      var childText = xmlDoc.createTextNode(text);
      childEle.appendChild(childText);
    }
    if (attr != '') {
      childEle.setAttribute(attr, attr_value);
    }
    parent.appendChild(childEle);
  }

  if (rest == true) {
    notetype = xmlDoc.createElement('rest');
  } else {
    notetype = xmlDoc.createElement('unpitched');
    createNoteElement(notetype, 'display-step', 'E');
    createNoteElement(notetype, 'display-octave', '4');
  }
  noteEle.appendChild(notetype);

  createNoteElement(noteEle, 'duration', duration);
  createNoteElement(noteEle, 'type', type);
  createNoteElement(noteEle, 'stem', 'up', 'color', '');
  createNoteElement(noteEle, 'notehead', '', 'color', '');

  let beamNum = '';
  let beamText = '';
  let beamNum16th = '';
  let beamText16th = '';
  switch (counter % 4) {
    case 0:
      if (duration < 4) {
        (beamNum = '1'), (beamText = 'begin');
      }
      if (duration == 1) {
        (beamNum16th = '2'), (beamText16th = 'begin');
      }
      break;
    case 1:
      if (duration < 4) {
        (beamNum = '1'), (beamText = 'continue');
      }
      if (duration == 1) {
        (beamNum16th = '2'), (beamText16th = 'continue');
      }
      break;
    case 2:
      if (duration == 2) {
        (beamNum = '1'), (beamText = 'end');
      }
      if (duration == 1) {
        (beamNum = '1'), (beamText = 'continue');
        (beamNum16th = '2'), (beamText16th = 'continue');
      }
      break;
    case 3:
      (beamNum = '1'),
        (beamText = 'end'),
        (beamNum16th = '2'),
        (beamText16th = 'end');
      break;
  }
  if (beamNum == '1') {
    createNoteElement(noteEle, 'beam', beamText, 'number', beamNum);
  }

  if (beamNum16th == '2') {
    createNoteElement(noteEle, 'beam', beamText16th, 'number', beamNum16th);
  }
  return noteEle;
}

const changeNoteColor = (musXml, measureIdx, noteIdx, isCorrect) => {
  let note =
    musXml.getElementsByTagName('measure')[measureIdx - 1].childNodes[noteIdx]; //Measure Idx starts at 1 and noteIdx starts at 1
  if (!isCorrect) {
    note.childNodes[3].setAttribute('color', '#CC0000');
    note.childNodes[4].setAttribute('color', '#CC0000');
  } //Should be whatever function to display the webpage again.
};

const trav = () => {
  return 'heather';
};
