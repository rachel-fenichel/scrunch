import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

// Copied over from core/constants.js.
const eventCategory = 'event';
const broadcastType = 'broadcast_msg';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Block for when a sprite is touching an object.
{
  'type': 'event_whentouchingobject',
      "message0": Blockly.Msg.EVENT_WHENTOUCHINGOBJECT,
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // "Touching [Object]" Block Menu.
{
  'type': 'event_touchingobjectmenu',
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
      "extensions": ["colours_event", "output_string"]
    }
,

  // Block for when flag clicked.
{
  'type': 'event_whenflagclicked',
      "id": "event_whenflagclicked",
      "message0": Blockly.Msg.EVENT_WHENFLAGCLICKED,
      "args0": [
        {
          "type": "field_image",
          "src": "green-flag.svg",
          "width": 24,
          "height": 24,
          "alt": "flag"
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // Block for when this sprite clicked.
{
  'type': 'event_whenthisspriteclicked',
      "message0": Blockly.Msg.EVENT_WHENTHISSPRITECLICKED,
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }

,

  // Block for when the stage is clicked.
{
  'type': 'event_whenstageclicked',
      "message0": Blockly.Msg.EVENT_WHENSTAGECLICKED,
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // Block for when broadcast received.
{
  'type': 'event_whenbroadcastreceived',
      "id": "event_whenbroadcastreceived",
      "message0": Blockly.Msg.EVENT_WHENBROADCASTRECEIVED,
      "args0": [
        {
          "type": "field_variable",
          "name": "BROADCAST_OPTION",
          "variableTypes": [broadcastType],
          "defaultType": broadcastType,
          "variable": Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // Block for when the current backdrop switched to a selected backdrop.
{
  'type': 'event_whenbackdropswitchesto',
      "message0": Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // Block for when loudness/timer/video motion is greater than the value.
{
  'type': 'event_whengreaterthan',
      "message0": Blockly.Msg.EVENT_WHENGREATERTHAN,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WHENGREATERTHANMENU",
          "options": [
            [Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS, 'LOUDNESS'],
            [Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER, 'TIMER']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,

  // Broadcast drop-down menu.
{
  'type': 'event_broadcast_menu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "BROADCAST_OPTION",
          "variableTypes":[broadcastType],
          "defaultType": broadcastType,
          "variable": Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME
        }
      ],
      "colour": scrunchColors.event.secondary,
      "colourSecondary": scrunchColors.event.secondary,
      "colourTertiary": scrunchColors.event.tertiary,
      "colourQuaternary": scrunchColors.event.quaternary,
      "extensions": ["output_string"]
    }
,

  // Block to send a broadcast.
{
  'type': 'event_broadcast',
      "id": "event_broadcast",
      "message0": Blockly.Msg.EVENT_BROADCAST,
      "args0": [
        {
          "type": "input_value",
          "name": "BROADCAST_INPUT"
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_statement"]
    }
,

  // Block to send a broadcast.
{
  'type': 'event_broadcastandwait',
      "message0": Blockly.Msg.EVENT_BROADCASTANDWAIT,
      "args0": [
        {
          "type":"input_value",
          "name":"BROADCAST_INPUT"
        }
      ],
      "category": eventCategory,
      "extensions": ["colours_event", "shape_statement"]
    }
,

  // Block to send a broadcast.
{
  'type': 'event_whenkeypressed',
      "id": "event_whenkeypressed",
      "message0": Blockly.Msg.EVENT_WHENKEYPRESSED,
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
      "category": eventCategory,
      "extensions": ["colours_event", "shape_hat"]
    }
,
]);