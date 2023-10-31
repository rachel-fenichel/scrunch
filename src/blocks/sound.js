
import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

const soundCategory = 'sound';


export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  // Sound effects drop-down menu.
  {
    'type': 'sound_sounds_menu',
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SOUND_MENU",
          "options": [
            ['1', '0'],
            ['2', '1'],
            ['3', '2'],
            ['4', '3'],
            ['5', '4'],
            ['6', '5'],
            ['7', '6'],
            ['8', '7'],
            ['9', '8'],
            ['10', '9'],
            // TODO: make this work again
            // ['call a function', function() {
            //   window.alert('function called!');}
            // ]
          ]
        }
      ],
      "colour": scrunchColors.sounds.secondary,
      "colourSecondary": scrunchColors.sounds.secondary,
      "colourTertiary": scrunchColors.sounds.tertiary,
      "colourQuaternary": scrunchColors.sounds.quaternary,
      "extensions": ["output_string"]
    },

  // Block to play sound.
{
  'type': 'sound_play',
      "message0": Blockly.Msg.SOUND_PLAY,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to play sound until done.
{
  'type': 'sound_playuntildone',
      "message0": Blockly.Msg.SOUND_PLAYUNTILDONE,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to stop all sounds
{
  'type': 'sound_stopallsounds',
      "message0": Blockly.Msg.SOUND_STOPALLSOUNDS,
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to set the audio effect
{
  'type': 'sound_seteffectto',
      "message0": Blockly.Msg.SOUND_SETEFFECTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.SOUND_EFFECTS_PITCH, 'PITCH'],
            [Blockly.Msg.SOUND_EFFECTS_PAN, 'PAN']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,


  // Block to change the audio effect
{
  'type': 'sound_changeeffectby',
      "message0": Blockly.Msg.SOUND_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.SOUND_EFFECTS_PITCH, 'PITCH'],
            [Blockly.Msg.SOUND_EFFECTS_PAN, 'PAN']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to clear audio effects
{
  'type': 'sound_cleareffects',
      "message0": Blockly.Msg.SOUND_CLEAREFFECTS,
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to change the sprite's volume by a certain value
{
  'type': 'sound_changevolumeby',
      "message0": Blockly.Msg.SOUND_CHANGEVOLUMEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to set the sprite's volume to a certain percent
{
  'type': 'sound_setvolumeto',
      "message0": Blockly.Msg.SOUND_SETVOLUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": soundCategory,
      "extensions": ["colours_sounds", "shape_statement"]
    }
,

  // Block to report volume
{
  'type': 'sound_volume',
      "message0": Blockly.Msg.SOUND_VOLUME,
      "category": soundCategory,
      "checkboxInFlyout": true,
      "extensions": ["colours_sounds", "output_number"]
    }
,
]);