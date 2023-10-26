

import { scrunchColors } from './colors';
import * as Blockly from 'blockly/core';

const motionCategory = 'motion';
// TODO: make images work again.

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    // Block to move steps.
    {
        'type': 'motion_movesteps',
        "message0": Blockly.Msg.MOTION_MOVESTEPS,
        "args0": [
            {
                "type": "input_value",
                "name": "STEPS"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to turn right.
    {
        'type': 'motion_turnright',
        "message0": Blockly.Msg.MOTION_TURNRIGHT,
        "args0": [
            {
                "type": "field_image",
                "src": "rotate-right.svg",
                "width": 24,
                "height": 24
            },
            {
                "type": "input_value",
                "name": "DEGREES"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to turn left.
    {
        'type': 'motion_turnleft',
        "message0": Blockly.Msg.MOTION_TURNLEFT,
        "args0": [
            {
                "type": "field_image",
                "src": "rotate-left.svg",
                "width": 24,
                "height": 24
            },
            {
                "type": "input_value",
                "name": "DEGREES"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to point in direction.
    {
        'type': 'motion_pointindirection',
        "message0": Blockly.Msg.MOTION_POINTINDIRECTION,
        "args0": [
            {
                "type": "input_value",
                "name": "DIRECTION"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Point towards drop-down menu.
    {
        'type': 'motion_pointtowards_menu',
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "TOWARDS",
                "options": [
                    [Blockly.Msg.MOTION_POINTTOWARDS_POINTER, '_mouse_'],
                    [Blockly.Msg.MOTION_POINTTOWARDS_RANDOM, '_random_']
                ]
            }
        ],
        "colour": scrunchColors.motion.secondary,
        "colourSecondary": scrunchColors.motion.secondary,
        "colourTertiary": scrunchColors.motion.tertiary,
        "colourQuaternary": scrunchColors.motion.quaternary,
        "extensions": ["output_string"]
    },
    // Block to point in direction.
    {
        'type': 'motion_pointtowards',
        "message0": Blockly.Msg.MOTION_POINTTOWARDS,
        "args0": [
            {
                "type": "input_value",
                "name": "TOWARDS"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Go to drop-down menu.
    {
        'type': 'motion_goto_menu',
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "TO",
                "options": [
                    [Blockly.Msg.MOTION_GOTO_POINTER, '_mouse_'],
                    [Blockly.Msg.MOTION_GOTO_RANDOM, '_random_']
                ]
            }
        ],
        "colour": scrunchColors.motion.secondary,
        "colourSecondary": scrunchColors.motion.secondary,
        "colourTertiary": scrunchColors.motion.tertiary,
        "colourQuaternary": scrunchColors.motion.quaternary,
        "extensions": ["output_string"]
    },
    // Block to go to X, Y.
    {
        'type': 'motion_gotoxy',
        "message0": Blockly.Msg.MOTION_GOTOXY,
        "args0": [
            {
                "type": "input_value",
                "name": "X"
            },
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to go to a menu item.
    {
        'type': 'motion_goto',
        "message0": Blockly.Msg.MOTION_GOTO,
        "args0": [
            {
                "type": "input_value",
                "name": "TO"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },

    // Block to glide for a specified time.
    {
        'type': 'motion_glidesecstoxy',
        "message0": Blockly.Msg.MOTION_GLIDESECSTOXY,
        "args0": [
            {
                "type": "input_value",
                "name": "SECS"
            },
            {
                "type": "input_value",
                "name": "X"
            },
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Glide to drop-down menu
    {
        'type': 'motion_glideto_menu',
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "TO",
                "options": [
                    [Blockly.Msg.MOTION_GLIDETO_POINTER, '_mouse_'],
                    [Blockly.Msg.MOTION_GLIDETO_RANDOM, '_random_']
                ]
            }
        ],
        "colour": scrunchColors.motion.secondary,
        "colourSecondary": scrunchColors.motion.secondary,
        "colourTertiary": scrunchColors.motion.tertiary,
        "colourQuaternary": scrunchColors.motion.quaternary,
        "extensions": ["output_string"]
    },
    // Block to glide to a menu item
    {
        'type': 'motion_glideto',
        "message0": Blockly.Msg.MOTION_GLIDETO,
        "args0": [
            {
                "type": "input_value",
                "name": "SECS"
            },
            {
                "type": "input_value",
                "name": "TO"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to change X.
    {
        'type': 'motion_changexby',
        "message0": Blockly.Msg.MOTION_CHANGEXBY,
        "args0": [
            {
                "type": "input_value",
                "name": "DX"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to set X.
    {
        'type': 'motion_setx',
        "message0": Blockly.Msg.MOTION_SETX,
        "args0": [
            {
                "type": "input_value",
                "name": "X"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to change Y.
    {
        'type': 'motion_changeyby',
        "message0": Blockly.Msg.MOTION_CHANGEYBY,
        "args0": [
            {
                "type": "input_value",
                "name": "DY"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to set Y.
    {
        'type': 'motion_sety',
        "message0": Blockly.Msg.MOTION_SETY,
        "args0": [
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to bounce on edge.
    {
        'type': 'motion_ifonedgebounce',
        "message0": Blockly.Msg.MOTION_IFONEDGEBOUNCE,
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to set rotation style.
    {
        'type': 'motion_setrotationstyle',
        "message0": Blockly.Msg.MOTION_SETROTATIONSTYLE,
        "args0": [
            {
                "type": "field_dropdown",
                "name": "STYLE",
                "options": [
                    [Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT, 'left-right'],
                    [Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE, 'don\'t rotate'],
                    [Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND, 'all around']
                ]
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to report X.
    {
        'type': 'motion_xposition',
        "message0": Blockly.Msg.MOTION_XPOSITION,
        "category": motionCategory,
        "checkboxInFlyout": true,
        "extensions": ["colours_motion", "output_number"]
    },
    // Block to report Y.
    {
        'type': 'motion_yposition',
        "message0": Blockly.Msg.MOTION_YPOSITION,
        "category": motionCategory,
        "checkboxInFlyout": true,
        "extensions": ["colours_motion", "output_number"]
    },
    // Block to report direction.
    {
        'type': 'motion_direction',
        "message0": Blockly.Msg.MOTION_DIRECTION,
        "category": motionCategory,
        "checkboxInFlyout": true,
        "extensions": ["colours_motion", "output_number"]
    },
    // Block to scroll the stage right. Does not actually do anything. This is
    // an obsolete block that is implemented for compatibility with Scratch 2.0
    // projects.
    {
        'type': 'motion_scroll_right',
        "message0": Blockly.Msg.MOTION_SCROLLRIGHT,
        "args0": [
            {
                "type": "input_value",
                "name": "DISTANCE"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to scroll the stage up. Does not actually do anything. This is an
    // obsolete block that is implemented for compatibility with Scratch 2.0
    // projects.
    {
        'type': 'motion_scroll_up',
        "message0": Blockly.Msg.MOTION_SCROLLUP,
        "args0": [
            {
                "type": "input_value",
                "name": "DISTANCE"
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to change the stage's scrolling alignment. Does not actually do
    // anything. This is an obsolete block that is implemented for compatibility
    // with Scratch 2.0 projects.
    {
        'type': 'motion_align_scene',
        "message0": Blockly.Msg.MOTION_ALIGNSCENE,
        "args0": [
            {
                "type": "field_dropdown",
                "name": "ALIGNMENT",
                "options": [
                    [Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT, 'bottom-left'],
                    [Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT, 'bottom-right'],
                    [Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE, 'middle'],
                    [Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT, 'top-left'],
                    [Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT, 'top-right']
                ]
            }
        ],
        "category": motionCategory,
        "extensions": ["colours_motion", "shape_statement"]
    },
    // Block to report the stage's scroll position's X value. Does not actually
    // do anything. This is an obsolete block that is implemented for
    // compatibility with Scratch 2.0 projects.
    {
        'type': 'motion_xscroll',
        "message0": Blockly.Msg.MOTION_XSCROLL,
        "category": motionCategory,
        "extensions": ["colours_motion", "output_number"]
    },
    // Block to report the stage's scroll position's Y value. Does not actually
    // do anything. This is an obsolete block that is implemented for
    // compatibility with Scratch 2.0 projects.
    {
        'type': 'motion_yscroll',
        "message0": Blockly.Msg.MOTION_YSCROLL,
        "category": motionCategory,
        "extensions": ["colours_motion", "output_number"]
    },
]);