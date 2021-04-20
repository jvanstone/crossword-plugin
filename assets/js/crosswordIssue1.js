var grid = [

	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, '17', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2', 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, '17', 0, '1', '1', '1', '1', '1', '1', '1', '1', '1,2', '1', '1', '1', 0, 0 ],
	[ 0, '9', 0, 0, '17', 0, 0, 0, 0, 0, 0, 0, 0, 0, '2', 0, 0, 0, 0,  ],
	[ 0, '9', 0, 0, '17', 0, 0, 0, 0, '3', '3', '3', '3', '3', '2,3', 0, 0, 0, 0 ],
	[ 0, '9', 0, 0, '17', 0, '5', 0, 0, 0, 0, 0, 0, 0, '2', 0, 0, 0, 0 ],
	[ '6', '6,9', '6', '6', '6,17', '6', '5, 6', '6', '6', '6', '6', '6', '6', '6', '2,6', '6', '6', 0, 0 ],
	[ 0, '9', 0, 0, 0, 0, '5', 0, 0, 0, 0, 0, 0, 0, '2', 0, 0, 0, 0 ],
	[ 0, '9', 0, 0, 0, 0, '5', 0, 0, 0, 0, 0, 0, 0, '2', 0, 0, 0, 0 ],
	[ 0, '9', 0, 0, 0, 0, '5', 0, 0, '8', 0, 0, 0, '14', '2,14', '14', '14', 0, 0 ],
	[ 0, 0, 0, 0, 0, '7', '5,7', '7', '7', '7,8', '7', '7', 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, '5', 0, 0, '8', 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, '5', 0, 0, '8', 0, '10', 0, 0, '4', 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, '13', '8,13', '13', '10, 13', '13', '13', '13', '13', '11,13', '13', 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, '8', 0, '10', 0, 0, '4', 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, '8', 0, '10', 0, 0, '4', 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, '15', '15', '8,15', '15', '10,15', '15', 0, '4', 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, '8', 0, '10', 0, 0, '4', 0, '11', 0, 0 ],
	[ 0, 0, '12', '12', '12', '12', '12,16','12', '12', '8,12', 0, '10', 0, 0, 0, 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, '16', 0, 0, 0, 0, 0, 0, 0, 0, 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, '16', 0, 0, 0, 0, 0, 0, 0, 0, 0, '11', 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
];

var clues = [
	'American bordering waterfall', //1
	'Which holiday falls on July 1st?', //2
	'Capital city of Canada', //3
	'Ice skating sport', //4
	'Castle located in Toronto', //5
	'The first hockey team', //6
	'What is made from fries, gravy, and cheese', //7
	'Hockey player turned coffee maker', //8
	'What is the tallest tower in Canada', //9
	'What is the most common language spoken in Canada?', //10
	'What is the center of the Canadian flag?', //11
	'Canada federal police', //12
	'What is the highest mountain in Canada', //13
	'Reynolds Canadian Deadpool actor', //14
	'What is our dollar coin called', //15
	'How many Provinces in Canada', //16
	'Dam making mammal' //17
];

var answers = [
	'NIAGARAFALLS', //1
	'CANADADAY', //2
	'OTTAWA', //3
	'HOCKEY', //4
	'CASALOMA', //5
	'MONTREALCANADIANS', //6
	'POUTINE', //7
	'TIMHORTONS', //8
	'CNTOWER', //9
	'ENGLISH', //10
	'MAPLELEAF', //11
	'MOUNTIES', //12
	'MOUNTLOGAN', //13
	'RYAN', //14
	'LOONIE', //15
	'TEN', //16
	'BEAVER' //17
];

/****
 * 
 *   Draw the Grid
 * 
 */
$.each( grid, function( i ) {
	var row = $( '<tr></tr>' );
	$.each( this, function( j ) {
		if ( 0 == this ) {
        	$( row ).append( '<td class="square empty"></td>' );
		} else {
			var question_number = String( grid[i][j]).split( ',' );

			var starting_number = '';
			var question_number_span = '';

			for ( var k = 0;k < question_number.length;k++ ) {
				var direction = get_direction( question_number[k]);
				var startpos = get_startpos( question_number[k], direction );

				if ( 'horizontal' == direction && startpos[0] == i && startpos[1] == j ) {
					starting_number += question_number[k] + ',';

				} else if ( 'vertical' == direction && startpos[0] == j && startpos[1] == i ) {
					starting_number += question_number[k] + ',';
				}

			}
			if ( '' != starting_number ) {
				question_number_span = '<span class="question_number">' + starting_number.replace( /(^,)|(,$)/g, '' ) + '</span>';
			}

			$( row ).append( '<td>' + question_number_span + '<div class="square letter" data-number="' + this + '" contenteditable="true"></div></td>' );
		}
	});
	$( '#puzzle' ).append( row );
});

//Draw hints
var vertical_hints = $( '<div id="vertical_hints"></div>' );
var horizontal_hints = $( '<div id="horizontal_hints"></div>' );
$.each( clues, function( index ) {

	var direction = get_direction( index + 1 );

	if ( 'horizontal' == direction ) {
		$( horizontal_hints ).append( '<div class="hint"><b>' + ( index + 1 ) + '</b>. ' + clues[index] + '</hint>' );
	} else if ( 'vertical' == direction ) {
    	$( vertical_hints ).append( '<div class="hint"><b>' + ( index + 1 ) + '</b>. ' + clues[index] + '</hint>' );
	}
});
$( '#vertical_hints_container' ).append( vertical_hints );
$( '#horizontal_hints_container' ).append( horizontal_hints );

$( '.letter' ).keyup( function() {
	var this_text = $( this ).text();
	if ( 1 < this_text.length ) {
    	$( this ).text( this_text.slice( 0, 1 ) );
	}
});

$( '.letter' ).click( function() {
	document.execCommand( 'selectAll', false, null );

	$( '.letter' ).removeClass( 'active' );
	$( this ).addClass( 'active' );

	$( '.hint' ).css( 'color', 'initial' );

	var question_numbers = String( $( this ).data( 'number' ) ).split( ',' );

	$.each( question_numbers, function() {
		$( '#hints .hint:nth-child(' + this + ')' ).css( 'color', 'red' );
	});
});

/****
 * 
 *   Solve the Line
 * 
 */

$( '#solve' ).click( function() {
	if ( !$( '.letter.active' ).length )
		{return;}
	var question_numbers = String( $( '.letter.active' ).data( 'number' ) ).split( ',' );
	$.each( question_numbers, function() {
		fillAnswer( this );
	});
});


/****
 * 
 *   Clear the board
 * 
 */
$( '#clear_all' ).click( function() {
	if ( !$( '.letter.active' ).length )
		return;
	var question_numbers = String( $( '.letter.active' ).data( 'number' ) ).split( ',' );
	$.each( question_numbers, function() {
		clearAnswer( this );
	});
});

$( '#check' ).click( function() {
	$( '#puzzle td div' ).css( 'color', 'initial' );
	for ( var i = 0;i < answers.length; i++ ) {
		checkAnswer( i + 1 );
	}
});

$( '#clue' ).click( function() {
	if ( !$( '.letter.active' ).length )
		return;
	var question_numbers = String( $( '.letter.active' ).data( 'number' ) ).split( ',' );
	showClue( question_numbers[0], $( '.letter.active' ).parent().index(), $( '.letter.active' ).parent().parent().index() );
});

function get_direction( question_number ) {
	for ( var i = 0;i < grid.length;i++ ) {
    	for ( var j = 0;j < grid[i].length;j++ ) {
			if ( -1 != String( grid[i][j]).indexOf( question_number ) ) {
				if ( grid[i + 1][j] == question_number || grid[i - 1][j] == question_number ) {
					return 'vertical';
				}

				if ( grid[i][j + 1] == question_number || grid[i][j - 1] == question_number ) {
					return 'horizontal';
				}
			}
    	}
	}
}

function get_startpos( question_number, direction ) {
	if ( 'horizontal' == direction ) {
		for ( var i = 0;i < grid.length;i++ ) {
			for ( var j = 0;j < grid[i].length;j++ ) {
				if ( -1 != String( grid[i][j]).indexOf( question_number ) ) {
					return [i, j];
				}
			}
		}
	} else if ( 'vertical' == direction ) {
		for ( var i = 0;i < grid.length;i++ ) {
			for ( var j = 0;j < grid[i].length;j++ ) {
				if ( -1 != String( grid[j][i]).indexOf( question_number ) ) {
					return [i, j];
				}
			}
		}
	}
}

/****
 * 
 *   Fill the Answer
 * 
 */

function fillAnswer( question_number ) {
	$( '#puzzle td div' ).css( 'color', 'initial' );

	var question_answer = answers[question_number - 1];
	var direction = get_direction( question_number );
	var startpos = get_startpos( question_number, direction );
	var answer_letters = question_answer.split( '' );

	if ( 'horizontal' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			$( '#puzzle tr:nth-child(' + ( startpos[0] + 1 ) + ') td:nth-child(' + ( startpos[1] + 1 + i ) + ') div' ).text( answer_letters[i]);
		}

	} else if ( 'vertical' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			$( '#puzzle tr:nth-child(' + ( startpos[1] + 1 + i ) + ') td:nth-child(' + ( startpos[0] + 1 ) + ') div' ).text( answer_letters[i]);
		}

	}
}


/****
 * 
 *   Clear the Answer
 * 
 */

function clearAnswer( question_number ) {
	$( '#puzzle td div' ).css( 'color', 'initial' );

	var question_answer = answers[question_number - 1];
	var direction = get_direction( question_number );
	var startpos = get_startpos( question_number, direction );
	var answer_letters = question_answer.split( '' );

	if ( 'horizontal' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			$( '#puzzle tr:nth-child(' + ( startpos[0] + 1 ) + ') td:nth-child(' + ( startpos[1] + 1 + i ) + ') div' ).text( '' );
		}

	} else if ( 'vertical' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			$( '#puzzle tr:nth-child(' + ( startpos[1] + 1 + i ) + ') td:nth-child(' + ( startpos[0] + 1 ) + ') div' ).text( '' );
		}

	}
}

function checkAnswer( question_number ) {
	var question_answer = answers[question_number - 1];
	var direction = get_direction( question_number );
	var startpos = get_startpos( question_number, direction );
	var answer_letters = question_answer.split( '' );

	if ( 'horizontal' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			if ( $( '#puzzle tr:nth-child(' + ( startpos[0] + 1 ) + ') td:nth-child(' + ( startpos[1] + 1 + i ) + ') div' ).text() != question_answer[i] && '' != $( '#puzzle tr:nth-child(' + ( startpos[0] + 1 ) + ') td:nth-child(' + ( startpos[1] + 1 + i ) + ') div' ).text() ) {
				$( '#puzzle tr:nth-child(' + ( startpos[0] + 1 ) + ') td:nth-child(' + ( startpos[1] + 1 + i ) + ') div' ).css( 'color', 'red' );
			}
		}

	} else if ( 'vertical' == direction ) {
		for ( var i = 0; i < answer_letters.length; i++ ) {
			if ( $( '#puzzle tr:nth-child(' + ( startpos[1] + 1 + i ) + ') td:nth-child(' + ( startpos[0] + 1 ) + ') div' ).text() != question_answer[i] && '' != $( '#puzzle tr:nth-child(' + ( startpos[1] + 1 + i ) + ') td:nth-child(' + ( startpos[0] + 1 ) + ') div' ).text() ) {
				$( '#puzzle tr:nth-child(' + ( startpos[1] + 1 + i ) + ') td:nth-child(' + ( startpos[0] + 1 ) + ') div' ).css( 'color', 'red' );
			}
		}

	}
}

function showClue( question_number, i, j ) {
	var question_answer = answers[question_number - 1];
	var direction = get_direction( question_number );
	var startpos = get_startpos( question_number, direction );
	var answer_letters = question_answer.split( '' );

	if ( 'horizontal' == direction ) {
		$( '#puzzle tr:nth-child(' + ( j + 1 ) + ') td:nth-child(' + ( i + 1 ) + ') div' ).text( answer_letters[i - startpos[1]]).css( 'color', 'initial' );
	} else if ( 'vertical' == direction ) {
		$( '#puzzle tr:nth-child(' + ( j + 1 ) + ') td:nth-child(' + ( i + 1 ) + ') div' ).text( answer_letters[j - startpos[1]]).css( 'color', 'initial' );
	}
}
