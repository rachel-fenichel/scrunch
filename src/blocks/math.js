
import * as Blockly from 'blockly/core';

// Previously Blockly.OUTPUT_SHAPE_ROUND. TODO: Figure out what the new value is.
let round = 2;

let textFieldColor = '#FFFFFF';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    // Block for generic numeric value.
    {
        'type': 'math_number',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_number',
            'name': 'NUM',
            'value': '0'
          }
        ],
        'output': 'Number',
        'colour': textFieldColor,
        'colourSecondary': textFieldColor,
        'colourTertiary': textFieldColor,
        'colourQuaternary': textFieldColor
      },
      // Block for integer value (no decimal, + or -).
      {
        'type': 'math_integer',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_number',
            'name': 'NUM',
            'precision': 1
          }
        ],
        'output': 'Number',
        'colour': textFieldColor,
        'colourSecondary': textFieldColor,
        'colourTertiary': textFieldColor,
        'colourQuaternary': textFieldColor
      },
      // Block for whole number value, no negatives or decimals.
      {
        'type': 'math_whole_number',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_number',
            'name': 'NUM',
            'min': 0,
            'precision': 1
          }
        ],
        'output': 'Number',
        'colour': textFieldColor,
        'colourSecondary': textFieldColor,
        'colourTertiary': textFieldColor,
        'colourQuaternary': textFieldColor
      },
      // Block for positive number value, with decimal.
      {
        'type': 'math_positive_number',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_number',
            'name': 'NUM',
            'min': 0
          }
        ],
        'output': 'Number',
        'colour': textFieldColor,
        'colourSecondary': textFieldColor,
        'colourTertiary': textFieldColor,
        'colourQuaternary': textFieldColor
      },
      // Block for angle picker.
      {
        'type': 'math_angle',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_angle',
            'name': 'NUM',
            'value': 90
          }
        ],
        'output': 'Number',
        'colour': textFieldColor,
        'colourSecondary': textFieldColor,
        'colourTertiary': textFieldColor,
        'colourQuaternary': textFieldColor
      }
])