import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

const sensingCategory = 'sensing';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Block to Report if its touching a Object.
{
  'type': 'sensing_touchingobject',
      "message0": Blockly.Msg.SENSING_TOUCHINGOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // "Touching [Object]" Block Menu.
{
  'type': 'sensing_touchingobjectmenu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TOUCHINGOBJECTMENU",
          "options": [
            [Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER, '_mouse_'],
            [Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE, '_edge_']
          ]
        }
      ],
      "extensions": ["colours_sensing", "output_string"]
    }
,

  // Block to Report if its touching a certain Color.
{
  'type': 'sensing_touchingcolor',
      "message0": Blockly.Msg.SENSING_TOUCHINGCOLOR,
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // Block to Report if a color is touching a certain Color.
{
  'type': 'sensing_coloristouchingcolor',
      "message0": Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR,
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "COLOR2"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // Block to Report distance to another Object.
{
  'type': 'sensing_distanceto',
      "message0": Blockly.Msg.SENSING_DISTANCETO,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCETOMENU"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // "Distance to [Object]" Block Menu.
{
  'type': 'sensing_distancetomenu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DISTANCETOMENU",
          "options": [
            [Blockly.Msg.SENSING_DISTANCETO_POINTER, '_mouse_']
          ]
        }
      ],
      "extensions": ["colours_sensing", "output_string"]
    }
,

  // Block to ask a question and wait
{
  'type': 'sensing_askandwait',
      "message0": Blockly.Msg.SENSING_ASKANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "QUESTION"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "shape_statement"]
    }
,

  // Block to report answer
{
  'type': 'sensing_answer',
      "message0": Blockly.Msg.SENSING_ANSWER,
      "category": sensingCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to Report if a key is pressed.
{
  'type': 'sensing_keypressed',
      "message0": Blockly.Msg.SENSING_KEYPRESSED,
      "args0": [
        {
          "type": "input_value",
          "name": "KEY_OPTION"
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // Options for Keys.
{
  'type': 'sensing_keyoptions',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KEY_OPTION",
          "options": [
            [Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE, 'space'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_UP, 'up arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN, 'down arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT, 'right arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT, 'left arrow'],
            [Blockly.Msg.EVENT_WHENKEYPRESSED_ANY, 'any'],
            ['a', 'a'],
            ['b', 'b'],
            ['c', 'c'],
            ['d', 'd'],
            ['e', 'e'],
            ['f', 'f'],
            ['g', 'g'],
            ['h', 'h'],
            ['i', 'i'],
            ['j', 'j'],
            ['k', 'k'],
            ['l', 'l'],
            ['m', 'm'],
            ['n', 'n'],
            ['o', 'o'],
            ['p', 'p'],
            ['q', 'q'],
            ['r', 'r'],
            ['s', 's'],
            ['t', 't'],
            ['u', 'u'],
            ['v', 'v'],
            ['w', 'w'],
            ['x', 'x'],
            ['y', 'y'],
            ['z', 'z'],
            ['0', '0'],
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4'],
            ['5', '5'],
            ['6', '6'],
            ['7', '7'],
            ['8', '8'],
            ['9', '9']
          ]
        }
      ],
      "extensions": ["colours_sensing", "output_string"]
    }
,

  // Block to Report if the mouse is down.
{
  'type': 'sensing_mousedown',
      "message0": Blockly.Msg.SENSING_MOUSEDOWN,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // Block to report mouse's x position
{
  'type': 'sensing_mousex',
      "message0": Blockly.Msg.SENSING_MOUSEX,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to report mouse's y position
{
  'type': 'sensing_mousey',
      "message0": Blockly.Msg.SENSING_MOUSEY,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to set drag mode.
{
  'type': 'sensing_setdragmode',
      "message0": Blockly.Msg.SENSING_SETDRAGMODE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DRAG_MODE",
          "options": [
            [Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE, 'draggable'],
            [Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE, 'not draggable']
          ]
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "shape_statement"]
    }
,

  // Block to report loudness
{
  'type': 'sensing_loudness',
      "message0": Blockly.Msg.SENSING_LOUDNESS,
      "category": sensingCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to report if the loudness is "loud" (greater than 10). This is an
   // obsolete block that is implemented for compatibility with Scratch 2.0 and
   // 1.4 projects.
{
  'type': 'sensing_loud',
      "message0": Blockly.Msg.SENSING_LOUD,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_boolean"]
    }
,

  // Block to report timer
{
  'type': 'sensing_timer',
      "message0": Blockly.Msg.SENSING_TIMER,
      "category": sensingCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to reset timer
{
  'type': 'sensing_resettimer',
      "message0": Blockly.Msg.SENSING_RESETTIMER,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "shape_statement"]
    }
,

  // "* of _" object menu.
{
  'type': 'sensing_of_object_menu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECT",
          "options": [
            ['Sprite1', 'Sprite1'],
            ['Stage', '_stage_']
          ]
        }
      ],
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_string"]
    }
,


  // Block to report properties of sprites.
{
  'type': 'sensing_of',
      "message0": Blockly.Msg.SENSING_OF,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PROPERTY",
          "options": [
            [Blockly.Msg.SENSING_OF_XPOSITION, 'x position'],
            [Blockly.Msg.SENSING_OF_YPOSITION, 'y position'],
            [Blockly.Msg.SENSING_OF_DIRECTION, 'direction'],
            [Blockly.Msg.SENSING_OF_COSTUMENUMBER, 'costume #'],
            [Blockly.Msg.SENSING_OF_COSTUMENAME, 'costume name'],
            [Blockly.Msg.SENSING_OF_SIZE, 'size'],
            [Blockly.Msg.SENSING_OF_VOLUME, 'volume'],
            [Blockly.Msg.SENSING_OF_BACKDROPNUMBER, 'backdrop #'],
            [Blockly.Msg.SENSING_OF_BACKDROPNAME, 'backdrop name']
          ]
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "output": true,
      "category": sensingCategory,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "extensions": ["colours_sensing"]
    }
,

  // Block to Report the current option.
{
  'type': 'sensing_current',
      "message0": Blockly.Msg.SENSING_CURRENT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly.Msg.SENSING_CURRENT_YEAR, 'YEAR'],
            [Blockly.Msg.SENSING_CURRENT_MONTH, 'MONTH'],
            [Blockly.Msg.SENSING_CURRENT_DATE, 'DATE'],
            [Blockly.Msg.SENSING_CURRENT_DAYOFWEEK, 'DAYOFWEEK'],
            [Blockly.Msg.SENSING_CURRENT_HOUR, 'HOUR'],
            [Blockly.Msg.SENSING_CURRENT_MINUTE, 'MINUTE'],
            [Blockly.Msg.SENSING_CURRENT_SECOND, 'SECOND']
          ]
        }
      ],
      "category": sensingCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to report days since 2000
{
  'type': 'sensing_dayssince2000',
      "message0": Blockly.Msg.SENSING_DAYSSINCE2000,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to report user's username
{
  'type': 'sensing_username',
      "message0": Blockly.Msg.SENSING_USERNAME,
      "category": sensingCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    }
,

  // Block to report user's ID. Does not actually do anything. This is an
   // obsolete block that is implemented for compatibility with Scratch 2.0
// projects.
{
  'type': 'sensing_userid',
      "message0": Blockly.Msg.SENSING_USERID,
      "category": sensingCategory,
      "extensions": ["colours_sensing", "output_number"]
    }
,
]);