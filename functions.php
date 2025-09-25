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
  get_stylesheet_uri(),
  [],
  filemtime( get_stylesheet_directory() . '/style.css' )
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
        register_block_type(__DIR__ . '/blocks/faq-accordion/src');
        register_block_type(__DIR__ . '/blocks/enhanced-video/src');
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


//custom Ai chat
add_filter('render_block', function ($block_content, $block) {
    if ($block['blockName'] === 'jetpack/ai-chat') {
        $block_content = '
                    <div class="custom-search">
                        <form role="search" method="get" action="' . esc_url(home_url('/')) . '">
                            <input type="search" name="s" placeholder="Type your questions here" value="' . esc_attr(get_search_query()) . '" />
                            <button type="submit">
                                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2551_8110)">
                                        <path d="M23.8591 0.651442C23.2572 2.37836 22.5192 3.35288 21.2724 4.05511C21.0932 4.15543 20.5773 4.3704 20.1259 4.53521C19.266 4.84333 19.094 4.94365 19.18 5.0798C19.2087 5.12279 19.5956 5.29477 20.047 5.45958C21.0502 5.82502 21.5805 6.10448 22.0606 6.51292C22.8989 7.22949 23.3002 7.86006 23.8161 9.25019C24.2246 10.3752 24.2819 10.3752 24.7119 9.19287C25.149 7.99621 25.4141 7.54477 26.102 6.85687C26.7899 6.16897 27.2413 5.90385 28.438 5.46674C29.6131 5.03681 29.6203 4.98665 28.5096 4.57821C27.4993 4.20559 27.098 4.00496 26.5248 3.56785C25.7007 2.95161 25.1275 2.06307 24.6402 0.644276C24.4396 0.0638599 24.3751 -0.0507898 24.2533 -0.0507898C24.1243 -0.0507898 24.0598 0.0638599 23.8591 0.651442Z" fill="url(#paint0_linear_2551_8110)"/>
                                        <path d="M12.4091 6.05388C12.3661 6.10404 12.0867 6.8421 11.7857 7.68764C11.4776 8.53319 11.062 9.5507 10.8613 9.94481C10.1233 11.3779 8.89079 12.7609 7.52932 13.6638C6.61929 14.2729 6.06037 14.5308 4.2188 15.1972C2.67103 15.7561 2.45606 15.878 2.6137 16.1216C2.66386 16.2004 3.31593 16.4727 4.2188 16.8023C6.06037 17.4687 6.61929 17.7267 7.52932 18.3358C8.89079 19.2386 10.1233 20.6216 10.8613 22.0547C11.062 22.4488 11.4776 23.4664 11.7785 24.3119C12.0867 25.1574 12.3805 25.8955 12.4306 25.9528C12.4808 26.0102 12.5883 26.0316 12.6957 26.003C12.8462 25.9672 12.9322 25.788 13.3836 24.5125C13.6703 23.71 14.05 22.757 14.222 22.3843C15.175 20.3565 16.7945 18.7012 18.8224 17.6837C19.1663 17.5117 20.0262 17.1606 20.7356 16.9098C22.7419 16.1861 22.6488 16.2291 22.6201 15.9783C22.5986 15.7705 22.5771 15.7561 20.9864 15.1757C20.0978 14.8533 19.0946 14.452 18.765 14.28C16.7587 13.2625 15.1679 11.6287 14.222 9.6152C14.05 9.24258 13.6774 8.29672 13.3908 7.5085C13.1113 6.72028 12.8391 6.05388 12.7961 6.02522C12.6671 5.93923 12.4879 5.96073 12.4091 6.05388Z" fill="url(#paint1_linear_2551_8110)"/>
                                        <path d="M24.0741 22.0332C24.0454 22.1264 23.9093 22.4847 23.7803 22.843C23.3289 24.0898 22.8703 24.7992 22.0606 25.4871C21.5805 25.8955 21.0502 26.175 20.047 26.5404C19.5956 26.7052 19.2087 26.8772 19.18 26.9202C19.094 27.0563 19.266 27.1567 20.1259 27.4648C20.5773 27.6296 21.0932 27.8446 21.2724 27.9449C22.5192 28.6471 23.2572 29.6216 23.8591 31.3485C24.0598 31.9361 24.1243 32.0508 24.2533 32.0508C24.3751 32.0508 24.4396 31.9361 24.6402 31.3557C25.1275 29.9369 25.7007 29.0484 26.5248 28.4321C27.098 27.995 27.4993 27.7944 28.5096 27.4218C29.6203 27.0133 29.6131 26.9632 28.438 26.5332C27.2198 26.089 26.7899 25.831 26.0733 25.1073C25.3711 24.3979 25.1633 24.0468 24.7119 22.8071C24.3751 21.8828 24.2103 21.6821 24.0741 22.0332Z" fill="url(#paint2_linear_2551_8110)"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_2551_8110" x1="19.5002" y1="4.68121" x2="29.4325" y2="4.68121" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9D9789"/>
                                            <stop offset="1" stop-color="#E6D1BE"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2551_8110" x1="3.24102" y1="15.3273" x2="22.8298" y2="15.3273" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9D9789"/>
                                            <stop offset="1" stop-color="#E6D1BE"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_2551_8110" x1="19.5002" y1="26.6225" x2="29.4325" y2="26.6225" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9D9789"/>
                                            <stop offset="1" stop-color="#E6D1BE"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2551_8110">
                                            <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Ask
                            </button>
                        </form>
                    </div>';
    }
    return $block_content;
}, 10, 2);

// Enqueues Enhanced Video block assets.
if (! function_exists('somira_enqueue_enhanced_video_assets')) :
    /**
     * Enqueues Enhanced Video block JavaScript.
     *
     * @since Somira 1.0
     *
     * @return void
     */
    function somira_enqueue_enhanced_video_assets()
    {
        // Only enqueue on pages that contain our enhanced video block
        if (has_block('somira/enhanced-video')) {
            wp_enqueue_script(
                'somira-enhanced-video',
                get_template_directory_uri() . '/blocks/enhanced-video/dist/view.js',
                array(),
                filemtime(get_template_directory() . '/blocks/enhanced-video/dist/view.js'),
                true
            );
            
            // Add inline script as backup
            wp_add_inline_script(
                'somira-enhanced-video',
                'console.log("Enhanced Video: Script enqueued successfully"); if(typeof window.initEnhancedVideo === "function") { window.initEnhancedVideo(); } else { setTimeout(function(){ if(typeof window.initEnhancedVideo === "function") window.initEnhancedVideo(); }, 1000); }'
            );
        }
    }
endif;
add_action('wp_enqueue_scripts', 'somira_enqueue_enhanced_video_assets');