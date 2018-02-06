var contentfulClient = contentful.createClient({
    accessToken: 'a5928e816edc7addfa4298669bd534f83b8cd907b920511b7d2f86f0d5b3e270',
    space: '2q1fpqwpgegt'
})

var PRODUCT_CONTENT_TYPE_ID = '2PqfXUJwE8qSYKuM0U6w8M'



document.addEventListener("DOMContentLoaded", function(event) {
    var container = document.getElementById("content");
    contentfulClient.getEntries({
            content_type: PRODUCT_CONTENT_TYPE_ID
        })
        .then(function(entries) {
            container.innerHTML = renderProducts(entries.items)
        })
});


function renderProducts(products) {
    return '<div class="products row">' +
        products.map(renderSingleProduct).join('\n') +
        '</div>'
}

function renderSingleProduct(product) {
    var fields = product.fields
    return  '<div class="col-md-4 col-sm-6">' +
        '<div class="product-in-list card mb-4 box-shadow">' +
        '<div class="product-image card-img-top">' +
        renderImage(fields.image[0], fields.slug) +
        '</div>' +
        '<div class="product-details card-body">' +
        renderProductDetails(fields) +
        '</div>' +
        '</div>' +
        '</div>'
}

function renderProductDetails(fields) {
    return renderProductHeader(fields) +
        '<p class="product-categories">' +
        fields.categories.map(function(category) {
            return category.fields.title
        }).join(', ') +
        '</p>' +
        marked(fields.productDescription) +
        '<p class="priceText">' + fields.price + ' &euro;</p>' +
        '<p><button type="button" class="btn btn-light">BUY NOW</button></p>' /* +
        '<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ') + '</p>' */
}

function renderProductHeader(fields) {
    return '<div class="product-header">' +
        '<h2>' +
        '<a href="product/' + fields.slug + '">' +
        fields.productName +
        '</a>' +
        '</h2>' +
        ' by ' +
        '<a href="brand/' + fields.brand.sys.id + '">' + fields.brand.fields.companyName + '</a>' +
        '</div>'
}

function renderImage(image, slug) {
    if (image && image.fields.file) {
        return '<a href="product/' + slug + '">' +
              '<div class="image" style="background:url(https:' + image.fields.file.url + ')"></div>' /*
            '<img src="https:' + image.fields.file.url + '" height="150" />' */ +
            '</a>'
    } else {
        return ''
    }
}
