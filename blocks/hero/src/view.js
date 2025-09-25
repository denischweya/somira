/**
 * Use this file for any public-facing functionality that needs to be loaded for the block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#viewscript
 */

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.somira-hero-button');
    let angle = 0;
    function rotate() {
      angle = (angle + 1) % 360;
      btn.style.setProperty('--angle', angle + 'deg');
      requestAnimationFrame(rotate);
    }
    rotate();
  });
  