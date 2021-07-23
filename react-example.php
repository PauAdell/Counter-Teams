<?php
/**
 * Plugin Name:  React Example
 * Description:  Example.
 * Version:      1.0.0
 */

namespace React_Example;
defined( 'ABSPATH' ) or die();

function add_page() {
  add_menu_page(
    'React Example',
    'React Example',
    'read',
    'react-example',
    function () {
      echo '<div id="react-example-wrapper"></div>';
    }
  );
}
add_action( 'admin_menu', __NAMESPACE__ . '\add_page' );

function enqueue_scripts() {
  $screen = get_current_screen();
  if ( 'toplevel_page_react-example' !== $screen->id ) {
    return;
  }

  $dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
  $url = untrailingslashit( plugin_dir_url( __FILE__ ) );

  if ( ! file_exists( "{$dir}/build/index.asset.php" ) ) {
    return;
  }

  $asset = include "{$dir}/build/index.asset.php";
  wp_enqueue_script(
    'react-example',
    "{$url}/build/index.js",
    $asset['dependencies'],
    $asset['version'],
    true
  );
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );