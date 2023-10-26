
import * as Blockly from 'blockly/core';

import { scrunchColors } from './colors';

const looksCategory = 'looks';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Block to say for some time.
{
  'type': 'looks_sayforsecs',
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to say.
{
  'type': 'looks_say',
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to think for some time.
{
  'type': 'looks_thinkforsecs',
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to think.
{
  'type': 'looks_think',
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Show block.
{
  'type': 'looks_show',
      "message0": Blockly.Msg.LOOKS_SHOW,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Hide block.
{
  'type': 'looks_hide',
      "message0": Blockly.Msg.LOOKS_HIDE,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

   // Hide-all-sprites block. Does not actually do anything. This is an
   // obsolete block that is implemented for compatibility with Scratch 2.0
   // projects.
{
  'type': 'looks_hideallsprites',
      "message0": Blockly.Msg.LOOKS_HIDEALLSPRITES,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to change graphic effect.
{
  'type': 'looks_changeeffectby',
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to set graphic effect.
{
  'type': 'looks_seteffectto',
      "message0": Blockly.Msg.LOOKS_SETEFFECTTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to clear graphic effects.
{
  'type': 'looks_cleargraphiceffects',
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to change size
{
  'type': 'looks_changesizeby',
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to set size
{
  'type': 'looks_setsizeto',
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to report size
{
  'type': 'looks_size',
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": looksCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    }
,

   // Block to change stretch. Does not actually do anything. This is an
   // obsolete block that is implemented for compatibility with Scratch 1.4
   // projects as well as 2.0 projects that still have the block.
   // The "stretch" blocks were introduced in very early versions of Scratch,
   // but their functionality was removed shortly later. They still appeared
   // correctly up until (and including) Scratch 1.4 - as "change stretch by"
   // and "set stretch to" - but were removed altogether in Scratch 2.0, and
   // displayed as red "undefined" blocks. Some Scratch projects still contain
   // these blocks, however, and they don't open in 3.0 unless the blocks
   // actually exist (though they still don't functionally do anything).
{
  'type': 'looks_changestretchby',
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

   // Block to set stretch. Does not actually do anything. This is an obsolete
   // block that is implemented for compatibility with Scratch 1.4 projects
   // (see looks_changestretchby).
{
  'type': 'looks_setstretchto',
      "message0": Blockly.Msg.LOOKS_SETSTRETCHTO,
      "args0": [
        {
          "type": "input_value",
          "name": "STRETCH"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Costumes drop-down menu.
{
  'type': 'looks_costume',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COSTUME",
          "options": [
            ['costume1', 'COSTUME1'],
            ['costume2', 'COSTUME2']
          ]
        }
      ],
      "colour": scrunchColors.looks.secondary,
      "colourSecondary": scrunchColors.looks.secondary,
      "colourTertiary": scrunchColors.looks.tertiary,
      "colourQuaternary": scrunchColors.looks.quaternary,
      "extensions": ["output_string"]
    }
,

  // Block to switch the sprite's costume to the selected one.
{
  'type': 'looks_switchcostumeto',
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to switch the sprite's costume to the next one.
{
  'type': 'looks_nextcostume',
      "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to switch the backdrop to the selected one.
{
  'type': 'looks_switchbackdropto',
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Backdrop list
{
  'type': 'looks_backdrops',
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "colour": scrunchColors.looks.secondary,
      "colourSecondary": scrunchColors.looks.secondary,
      "colourTertiary": scrunchColors.looks.tertiary,
      "colourQuaternary": scrunchColors.looks.quaternary,
      "extensions": ["output_string"]
    }
,

  // "Go to front/back" Block.
{
  'type': 'looks_gotofrontback',
      "message0": Blockly.Msg.LOOKS_GOTOFRONTBACK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FRONT_BACK",
          "options": [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
          ]
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // "Go forward/backward [Number] Layers" Block.
{
  'type': 'looks_goforwardbackwardlayers',
      "message0": Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to report backdrop's number or name
{
  'type': 'looks_backdropnumbername',
      "message0": Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": looksCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    }
,

  // Block to report costume's number or name
{
  'type': 'looks_costumenumbername',
      "message0": Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": looksCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    }
,

  // Block to switch the backdrop to the selected one and wait.
{
  'type': 'looks_switchbackdroptoandwait',
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

  // Block to switch the backdrop to the next one.
{
  'type': 'looks_nextbackdrop',
      "message0": Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      "category": looksCategory,
      "extensions": ["colours_looks", "shape_statement"]
    }
,

]);