import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

const operatorsCategory = 'operators';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([

  // Block for adding two numbers.
{
  'type': 'operator_add',
      "message0": Blockly.Msg.OPERATORS_ADD,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for subtracting two numbers.
{
  'type': 'operator_subtract',
      "message0": Blockly.Msg.OPERATORS_SUBTRACT,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for multiplying two numbers.
{
  'type': 'operator_multiply',
      "message0": Blockly.Msg.OPERATORS_MULTIPLY,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for dividing two numbers.
{
  'type': 'operator_divide',
      "message0": Blockly.Msg.OPERATORS_DIVIDE,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for picking a random number.
{
  'type': 'operator_random',
      "message0": Blockly.Msg.OPERATORS_RANDOM,
      "args0": [
        {
          "type": "input_value",
          "name": "FROM"
        },
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for less than comparator.
{
  'type': 'operator_lt',
      "message0": Blockly.Msg.OPERATORS_LT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for equals comparator.
{
  'type': 'operator_equals',
      "message0": Blockly.Msg.OPERATORS_EQUALS,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for greater than comparator.
{
  'type': 'operator_gt',
      "message0": Blockly.Msg.OPERATORS_GT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for "and" boolean comparator.
{
  'type': 'operator_and',
      "message0": Blockly.Msg.OPERATORS_AND,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for "or" boolean comparator.
{
  'type': 'operator_or',
      "message0": Blockly.Msg.OPERATORS_OR,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for "not" unary boolean operator.
{
  'type': 'operator_not',
      "message0": Blockly.Msg.OPERATORS_NOT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND",
          "check": "Boolean"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for string join operator.
{
  'type': 'operator_join',
      "message0": Blockly.Msg.OPERATORS_JOIN,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_string"]
    }
,

  // Block for "letter _ of _" operator.
{
  'type': 'operator_letter_of',
      "message0": Blockly.Msg.OPERATORS_LETTEROF,
      "args0": [
        {
          "type": "input_value",
          "name": "LETTER"
        },
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_string"]
    }
,

  // Block for string length operator.
{
  'type': 'operator_length',
      "message0": Blockly.Msg.OPERATORS_LENGTH,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_string"]
    }
,

  // Block for _ contains _ operator
{
  'type': 'operator_contains',
      "message0": Blockly.Msg.OPERATORS_CONTAINS,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_boolean"]
    }
,

  // Block for mod two numbers.
{
  'type': 'operator_mod',
      "message0": Blockly.Msg.OPERATORS_MOD,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for rounding a numbers.
{
  'type': 'operator_round',
      "message0": Blockly.Msg.OPERATORS_ROUND,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,

  // Block for "advanced" math ops on a number.
{
  'type': 'operator_mathop',
      "message0": Blockly.Msg.OPERATORS_MATHOP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "options": [
            [Blockly.Msg.OPERATORS_MATHOP_ABS, 'abs'],
            [Blockly.Msg.OPERATORS_MATHOP_FLOOR, 'floor'],
            [Blockly.Msg.OPERATORS_MATHOP_CEILING, 'ceiling'],
            [Blockly.Msg.OPERATORS_MATHOP_SQRT, 'sqrt'],
            [Blockly.Msg.OPERATORS_MATHOP_SIN, 'sin'],
            [Blockly.Msg.OPERATORS_MATHOP_COS, 'cos'],
            [Blockly.Msg.OPERATORS_MATHOP_TAN, 'tan'],
            [Blockly.Msg.OPERATORS_MATHOP_ASIN, 'asin'],
            [Blockly.Msg.OPERATORS_MATHOP_ACOS, 'acos'],
            [Blockly.Msg.OPERATORS_MATHOP_ATAN, 'atan'],
            [Blockly.Msg.OPERATORS_MATHOP_LN, 'ln'],
            [Blockly.Msg.OPERATORS_MATHOP_LOG, 'log'],
            [Blockly.Msg.OPERATORS_MATHOP_EEXP, 'e ^'],
            [Blockly.Msg.OPERATORS_MATHOP_10EXP, '10 ^']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": operatorsCategory,
      "extensions": ["colours_operators", "output_number"]
    }
,
]);