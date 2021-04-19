<?php
/**
 * Plugin Name: Crossword Plugin - Canada Info Add-ON
 * Plugin URI:
 * Description: Adds a plug-in to the Canada Info
 * Version: 1.0
 * Author: Vanstone Online <jason@vanstoneonline.com>
 * Author URI: https://vanstoneonline.com
 * Text Domain: cg-crossword
 */

/**
 * Add the necessary CSS & Javascript Files
 *
 * @link https://developer.wordpress.org/reference/functions/wp_enqueue_script/
 */
function cg_crossword_scripts() {
	wp_enqueue_style( 'cg_crossword', plugin_dir_url( __FILE__ ) . 'assets/css/crossword.css' );
	wp_enqueue_script( 'CG-CW1', plugin_dir_url( __FILE__ ) . 'assets/js/crossword2.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'cg_crossword_scripts', 999 );




if ( ! function_exists( 'cg_crossword' ) ) {

	/***
	 * Create the actual plugin
	 *
	 */
	function cg_crossword() {

		// Bulk Add HTML to the Function.
		ob_start(); ?>

		<div id="printableArea" class="alignwide">
<!-- 			<h2 class="printOnly">Canada Info Guide - Issue 1 Crossword </h2>
-->
			<div id="puzzle_container" class="container-fluid">
				<table id="puzzle" class="table-responsive">
				</table>

				<div id="buttons_container" class="col-12 d-flex flex-wrap justify-content-around">
					<button id="clue" class="mobile-hide">Clue</button>
					<button id="check" class="mobile-hide">Check</button>
					<button id="solve" class="mobile-hide">Solve</button>
<!-- 					<button onclick="window.print();return false;" class="mobile-show" />Print Me</button>
 -->					<button id="clear_all" class="mobile-hide">Clear All</button>
				</div>

				<div id="hints_container" class="col-12">
					<div class="card col-md-5 hints">
						<div class="header"><h3>Vertical</h3></div>
						<div id="vertical_hints_container" class="card-body"></div>
					</div>
					<div class="card col-md-5 hints"> 
						<div class="header"><h3>Horizontal</h3></div>
						<div id="horizontal_hints_container" class="card-body"></div>
					</div>
				</div>	
			</div>
			<?php
			return ob_get_clean();
	}
}

add_shortcode( 'crossword1', 'cg_crossword' );
