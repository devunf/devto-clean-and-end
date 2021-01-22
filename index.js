function cleanAndEdit() {
    let tags = [
        'header',
        'div.crayons-article-actions',
        'div.spec__tags',
        'div.crayons-article__subheader',
        'section#comments',
        'section.crayons-card',
        'aside.crayons-layout__sidebar-right',
        'footer.crayons-footer',
    ];

    let moderatorTag = '.mod-actions-menu-btn';
    if (document.querySelector(moderatorTag) !== undefined) {
        tags.push(moderatorTag);
    }

    tags.forEach((tag) => {
        document.querySelector(tag).style.display = 'none';
    });

    // editing content on the page
    document.querySelector('body').setAttribute('contenteditable', 'true')

    // for printing content accurately
    document.querySelector('body').style.width = 'auto'
    document.querySelector('body').style.border = '0'
    document.querySelector('body').style.padding = '0'
    document.querySelector('body').style.float = 'none'
    document.querySelector('body').style.position = 'static'
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('body').style.margin = '0px 5%'

}

cleanAndEdit();