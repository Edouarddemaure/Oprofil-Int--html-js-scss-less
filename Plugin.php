h<?php
if (!defined('WPINC')) {
    die;
}


add_action('init','redirection_post');

if (get_post_type() === 'post'|| get_post_type() === 'page'  && !is_user_logged_in()) {

    
    
function redirection_post(){ 
$customfield = get_post_meta($post->ID, 'redirect', true);
if($customfield) wp_redirect(clean_url($field), 301);
exit;
}else{
    if(get_post_meta($post->ID, 'Shortlink', true) ){
        wp_redirect( get_post_meta($post->ID, 'Shortlink', true) );
        exit;
    }
}
get_header();
?>

// Quelques souci avec wordpress depuis que j'ai installer un nouveau téléporteur ( cause casse du premier ) 
// donc là ce soir j'ai du faire sans car j'arrivais pas à avoir mes wordpress en marche ... que des pages d'erreurs
// Et ce parfois sur une install neuve et parfois ça fonctione directement bref j'ai fait ça et le cerveau en pls en ce moment  19h15 :wink:

