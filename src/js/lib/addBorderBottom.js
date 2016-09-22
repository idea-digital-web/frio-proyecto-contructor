jQuery(function (jQuery) {
    // Agregar borde en titulos
  var template = `<div class='section-title__borderbottom'>
    <div class='borderbottom'></div>
    </div>`
  jQuery('header.entry-header').find('h1.entry-title').after(template)
  jQuery('section.storefront-product-section').find('h2.section-title').after(template)
  jQuery('main.site-main').find('h1.page-title').after(template)
  jQuery('.page-content').find('h2').after(template)
  jQuery('div.related.products').find('h2').after(template)
  jQuery('div.cross-sells').find('h2').after(template)
  jQuery('div.up-sells').find('h2').after(template)
})
