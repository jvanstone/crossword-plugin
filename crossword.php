<?php
/*
Plugin Name: Crossword Plugin - Canadian Guide Add-ON
Plugin URI: 
Description: Adds a plug-in to the Canadian Guide
Version: 1
Author: Vanstone Online
Author URI: https://vanstoneonline.com
Text Domain: cg-crossword
*/



 /*****
 * 
 * Add the necessary CSS files
 * 
 * 
 * @link https://developer.wordpress.org/reference/functions/wp_enqueue_script/
 */
function cg_crossword_plugin_css() {
    wp_enqueue_style( 'cg_crossword', plugin_dir_url(__FILE__).'assets/css/crossword.css' );
}
add_action( 'wp_enqueue_scripts', 'cg_crossword_plugin_css', 999 );


 /*****
 * 
 * Add the necessary Javasript files
 * 
 * 
 * @link https://developer.wordpress.org/reference/functions/wp_enqueue_script/
 */
function cg_crossword_scripts() {
 
    wp_enqueue_script( 'CG-CW1', plugin_dir_url(__FILE__).'assets/js/crossword2.js', array(), null, true);
 

}
add_action( 'wp_enqueue_scripts', 'cg_crossword_scripts', 999 );




if( !function_exists('cg_crossword')) {
    function cg_crossword() { 
    
    //Bulk Add HTML to the Function.
    ob_start(); ?>
    </article>
    <article>
    <div id="printableArea">
        <h2 class="printOnly">Canada Info Guide - Issue 1 Crossword </h2>
        <div id="puzzle_container" class="container-fluid">
            <table id="puzzle" class="table-responsive">
            </table>

            <div id="puzzle-img">
                <p> Please note: the Digital Crossword puzzle currently works only with iPads and Desktops. You are more then welcome to print the crossword out if you wish.</p>

                <img src="<?php echo plugin_dir_url(__FILE__); ?>assets/img/crossword.png" class="img-fluid" alt="crossword preview" />
            </div>

            <div id="buttons_container" class="col-12 d-flex flex-wrap justify-content-around">
                <button id="clue" class="mobile-hide">Clue</button>
                <button id="check" class="mobile-hide">Check</button>
                <button id="solve" class="mobile-hide">Solve</button>
                <button onclick="window.print();return false;" class="mobile-show" />Print Me</button>
                <button id="clear_all" class="mobile-hide">Clear All</button>
            </div>

            <div id="hints_container" class="col-12 d-flex flex-wrap">
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
    </div>

    <?php
        return ob_get_clean();
    }
}

add_shortcode('crossword1', 'cg_crossword'); 
