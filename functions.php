<?php
/**
 * Somira functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Somira
 * @since Somira 1.0
 */

// Adds theme support for post formats.
if (! function_exists('somira_post_format_setup')) :
    /**
     * Adds theme support for post formats.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_post_format_setup()
    {
        add_theme_support('post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ));
    }
endif;
add_action('after_setup_theme', 'somira_post_format_setup');

// Enqueues editor-style.css in the editors.
if (! function_exists('somira_editor_style')) :
    /**
     * Enqueues editor-style.css in the editors.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_editor_style()
    {
        add_editor_style('assets/css/editor-style.css');
    }
endif;
add_action('after_setup_theme', 'somira_editor_style');

// Enqueues style.css on the front.
if (! function_exists('somira_enqueue_styles')) :
    /**
     * Enqueues style.css on the front.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_enqueue_styles()
    {
        wp_enqueue_style(
            'somira-style',
            get_parent_theme_file_uri('style.css'),
            array(),
            wp_get_theme()->get('Version')
        );
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_styles');

// Enqueues video controls JavaScript.
if (! function_exists('somira_enqueue_video_controls')) :
    /**
     * Enqueues video controls JavaScript.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_video_controls()
    {
        wp_enqueue_script(
            'somira-video-controls',
            get_template_directory_uri() . '/assets/js/video-controls.js',
            array(),
            wp_get_theme()->get('Version'),
            true
        );
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_video_controls');

// Enqueues Google Fonts.
if (! function_exists('somira_enqueue_google_fonts')) :
    /**
     * Enqueues Google Fonts.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_google_fonts()
    {
        wp_enqueue_style(
            'somira-google-fonts',
            'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
            array(),
            wp_get_theme()->get('Version')
        );
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_google_fonts');

// Enqueues Flickity assets for the carousel block.
if (! function_exists('somira_enqueue_flickity_assets')) :
    /**
     * Enqueues Flickity CSS and JS for the carousel block.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_flickity_assets()
    {
        // Only enqueue on pages that contain our carousel block
        if (has_block('somira/carousel')) {
            wp_enqueue_style(
                'flickity-css',
                get_template_directory_uri() . '/blocks/carousel/flickity.css',
                array(),
                '2.3.0'
            );
            wp_enqueue_script(
                'flickity-js',
                get_template_directory_uri() . '/blocks/carousel/flickity.min.js',
                array(),
                '2.3.0',
                true
            );
        }
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_flickity_assets');

// Enqueues Flickity CSS for the block editor.
if (! function_exists('somira_enqueue_editor_flickity_assets')) :
    /**
     * Enqueues Flickity CSS for the block editor.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_editor_flickity_assets()
    {
        wp_enqueue_style(
            'flickity-css-editor',
            get_template_directory_uri() . '/blocks/carousel/flickity.css',
            array(),
            '2.3.0'
        );
    }
endif;
add_action('enqueue_block_editor_assets', 'somira_enqueue_editor_flickity_assets');

// Enqueues GSAP assets for the scroll video sections block.
if (! function_exists('somira_enqueue_gsap_assets')) :
    /**
     * Enqueues GSAP and ScrollTrigger for the scroll video sections block.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_gsap_assets()
    {
        // Only enqueue on pages that contain our scroll video sections block
        if (has_block('somira/scroll-video-sections')) {
            wp_enqueue_script(
                'gsap',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
                array(),
                '3.12.5',
                true
            );
            wp_enqueue_script(
                'gsap-scrolltrigger',
                'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
                array('gsap'),
                '3.12.5',
                true
            );
        }
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_gsap_assets');

// Registers custom block styles.
if (! function_exists('somira_block_styles')) :
    /**
     * Registers custom block styles.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_block_styles()
    {
        register_block_style(
            'core/list',
            array(
                'name'         => 'checkmark-list',
                'label'        => __('Checkmark', 'somira'),
                'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
            )
        );
    }
endif;
add_action('init', 'somira_block_styles');

// Registers pattern categories.
if (! function_exists('somira_pattern_categories')) :
    /**
     * Registers pattern categories.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_pattern_categories()
    {

        register_block_pattern_category(
            'somira_page',
            array(
                'label'       => __('Pages', 'somira'),
                'description' => __('A collection of full page layouts.', 'somira'),
            )
        );

        register_block_pattern_category(
            'somira_post-format',
            array(
                'label'       => __('Post formats', 'somira'),
                'description' => __('A collection of post format patterns.', 'somira'),
            )
        );
    }
endif;
add_action('init', 'somira_pattern_categories');

// Registers block binding sources.
if (! function_exists('somira_register_block_bindings')) :
    /**
     * Registers the post format block binding source.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return void
     */
    function somira_register_block_bindings()
    {
        register_block_bindings_source(
            'somira/format',
            array(
                'label'              => _x('Post format name', 'Label for the block binding placeholder in the editor', 'somira'),
                'get_value_callback' => 'somira_format_binding',
            )
        );
    }
endif;
add_action('init', 'somira_register_block_bindings');

// Registers custom blocks.
if (! function_exists('somira_register_blocks')) :
    /**
     * Registers custom blocks.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_register_blocks()
    {
        register_block_type(__DIR__ . '/blocks/hero/src');
        register_block_type(__DIR__ . '/blocks/carousel/src');
        register_block_type(__DIR__ . '/blocks/cta/src');
        register_block_type(__DIR__ . '/blocks/custom-link/src');
        register_block_type(__DIR__ . '/blocks/product-showcase/src');
        register_block_type(__DIR__ . '/blocks/scroll-video-sections');
    }
endif;
add_action('init', 'somira_register_blocks');

// Registers block binding callback function for the post format name.
if (! function_exists('somira_format_binding')) :
    /**
     * Callback function for the post format name block binding source.
     *
     * @since Twenty Twenty-Five 1.0
     *
     * @return string|void Post format name, or nothing if the format is 'standard'.
     */
    function somira_format_binding()
    {
        $post_format_slug = get_post_format();

        if ($post_format_slug && 'standard' !== $post_format_slug) {
            return get_post_format_string($post_format_slug);
        }
    }
endif;

// Enable SVG uploads
function allow_svg_upload($mimes)
{
    $mimes['svg']  = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'allow_svg_upload');

// Enable video uploads including MP4
function allow_video_upload($mimes)
{
    $mimes['mp4']  = 'video/mp4';
    $mimes['m4v']  = 'video/mp4';
    $mimes['mov']  = 'video/quicktime';
    $mimes['wmv']  = 'video/x-ms-wmv';
    $mimes['avi']  = 'video/avi';
    $mimes['mpg']  = 'video/mpeg';
    $mimes['ogv']  = 'video/ogg';
    $mimes['3gp']  = 'video/3gpp';
    $mimes['3g2']  = 'video/3gpp2';
    return $mimes;
}
add_filter('upload_mimes', 'allow_video_upload');
