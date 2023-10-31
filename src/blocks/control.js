import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

// TODO: make images work again.
const controlCategory = 'control';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Block for repeat n times (external number).
  // https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
{
  'type': 'control_forever',
      "id": "control_forever",
      "message0": Blockly.Msg.CONTROL_FOREVER,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_end"]
    }
,

  // Block for repeat n times (external number).
   // https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
{
  'type': 'control_repeat',
      "id": "control_repeat",
      "message0": Blockly.Msg.CONTROL_REPEAT,
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src":  "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block for if-then.
{
  'type': 'control_if',
      "type": "control_if",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1", // Statement
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block for if-else.
{
  'type': 'control_if_else',
      "type": "control_if_else",
      "message0": Blockly.Msg.CONTROL_IF,
      "message1": "%1",
      "message2": Blockly.Msg.CONTROL_ELSE,
      "message3": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,


  // Block to wait (pause) stack.
{
  'type': 'control_wait',
      "id": "control_wait",
      "message0": Blockly.Msg.CONTROL_WAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "DURATION"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block to wait until a condition becomes true.
{
  'type': 'control_wait_until',
      "message0": Blockly.Msg.CONTROL_WAITUNTIL,
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block to repeat until a condition becomes true.
{
  'type': 'control_repeat_until',
      "message0": Blockly.Msg.CONTROL_REPEATUNTIL,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block to repeat until a condition becomes false.
{
  'type': 'control_while',
      "message0": Blockly.Msg.CONTROL_WHILE,
      "message1": "%1",
      "message2": "%1",
      "lastDummyAlign2": "RIGHT",
      "args0": [
        {
          "type": "input_value",
          "name": "CONDITION",
          "check": "Boolean"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": "repeat.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

   // Block for for-each. This is an obsolete block that is implemented for
   // compatibility with Scratch 2.0 projects.
{
  'type': 'control_for_each',
      "type": "control_for_each",
      "message0": Blockly.Msg.CONTROL_FOREACH,
      "message1": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block for "when I start as a clone" hat.
{
  'type': 'control_start_as_clone',
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_STARTASCLONE,
      "args0": [
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_hat"]
    }
,

  // Create-clone drop-down menu.
{
  'type': 'control_create_clone_of_menu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CLONE_OPTION",
          "options": [
            [Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF, '_myself_']
          ]
        }
      ],
      "extensions": ["colours_control", "output_string"]
    }
,

  // Block for "create clone of..."
{
  'type': 'control_create_clone_of',
      "id": "control_start_as_clone",
      "message0": Blockly.Msg.CONTROL_CREATECLONEOF,
      "args0": [
        {
          "type": "input_value",
          "name": "CLONE_OPTION"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block for "delete this clone."
{
  'type': 'control_delete_this_clone',
      "message0": Blockly.Msg.CONTROL_DELETETHISCLONE,
      "args0": [
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_end"]
    }
,

  // Block to get the counter value. This is an obsolete block that is
   // implemented for compatibility with Scratch 2.0 projects.
{
  'type': 'control_get_counter',
      "message0": Blockly.Msg.CONTROL_COUNTER,
      "category": controlCategory,
      "extensions": ["colours_control", "output_number"]
    }
,

  // Block to add one to the counter value. This is an obsolete block that is
   // implemented for compatibility with Scratch 2.0 projects.
{
  'type': 'control_incr_counter',
      "message0": Blockly.Msg.CONTROL_INCRCOUNTER,
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  // Block to clear the counter value. This is an obsolete block that is
   // implemented for compatibility with Scratch 2.0 projects.
{
  'type': 'control_clear_counter',
      "message0": Blockly.Msg.CONTROL_CLEARCOUNTER,
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,

  /**
   * Block to run the contained script. This is an obsolete block that is
   * implemented for compatibility with Scratch 2.0 projects. Note that
   * this was originally designed to run all of the contained blocks
   * (sequentially, like normal) within a single frame, but this feature
   * was removed in place of custom blocks marked "run without screen
   * refresh". The "all at once" block was changed to run the contained
   * blocks ordinarily, functioning the same way as an "if" block with a
   * reporter that is always true (e.g. "if 1 = 1"). Also note that the
   * Scratch 2.0 spec for this block is "warpSpeed", but the label shows
   * "all at once".
   */
{
  'type': 'control_all_at_once',
      "message0": Blockly.Msg.CONTROL_ALLATONCE,
      "message1": "%1", // Statement
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": controlCategory,
      "extensions": ["colours_control", "shape_statement"]
    }
,
]);


// TODO: Fix stop all scripts block.
//   // Block for stop all scripts.
//   Blockly.Blocks['control_stop'] = {
//     init: function() {
//       var ALL_SCRIPTS = 'all';
//       var THIS_SCRIPT = 'this script';
//       var OTHER_SCRIPTS = 'other scripts in sprite';
//       var stopDropdown = new Blockly.FieldDropdown(function() {
//         if (this.sourceBlock_ &&
//             this.sourceBlock_.nextConnection &&
//             this.sourceBlock_.nextConnection.isConnected()) {
//           return [
//             [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
//           ];
//         }
//         return [[Blockly.Msg.CONTROL_STOP_ALL, ALL_SCRIPTS],
//           [Blockly.Msg.CONTROL_STOP_THIS, THIS_SCRIPT],
//           [Blockly.Msg.CONTROL_STOP_OTHER, OTHER_SCRIPTS]
//         ];
//       }, function(option) {
//         // Create an event group to keep field value and mutator in sync
//         // Return null at the end because setValue is called here already.
//         Blockly.Events.setGroup(true);
//         var oldMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
//         this.sourceBlock_.setNextStatement(option == OTHER_SCRIPTS);
//         var newMutation = Blockly.Xml.domToText(this.sourceBlock_.mutationToDom());
//         Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_,
//             'mutation', null, oldMutation, newMutation));
//         this.setValue(option);
//         Blockly.Events.setGroup(false);
//         return null;
//       });
//       this.appendDummyInput()
//           .appendField(Blockly.Msg.CONTROL_STOP)
//           .appendField(stopDropdown, 'STOP_OPTION');
//       this.setCategory(controlCategory);
//       this.setColour(Blockly.Colours.control.primary,
//           Blockly.Colours.control.secondary,
//           Blockly.Colours.control.tertiary,
//           Blockly.Colours.control.quaternary
//       );
//       this.setPreviousStatement(true);
//     },
//     mutationToDom: function() {
//       var container = document.createElement('mutation');
//       container.setAttribute('hasnext', this.nextConnection != null);
//       return container;
//     },
//     domToMutation: function(xmlElement) {
//       var hasNext = (xmlElement.getAttribute('hasnext') == 'true');
//       this.setNextStatement(hasNext);
//     }
//   };