class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
        this.$el.querySelector('.dropdown-label').textContent = this.items[0].label;
        this.$el.addEventListener('click', e => {
            if (e.target.classList.contains('dropdown-label')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }
            } else if (e.target.tagName.toLowerCase() === 'li') {
                this.select(e.target.dataset.id);
                this.close();
            }
        });

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join('');
        this.$el.querySelector('.dropdown-menu').insertAdjacentHTML('afterbegin', itemsHTML);
    }

    open () {
      this.$el.classList.add('open');
    }

    close () {
        this.$el.classList.remove('open');
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        this.$el.querySelector('.dropdown-label').textContent = item.label;
    }

}

const dropdown = new Dropdown ('#dropdown', {
    items: [
        {label: 'Moscow', id: 'msk'},
        {label: 'Saint-Petersburg', id: 'spb'},
        {label: 'Novosibirsk', id: 'nsk'},
        {label: 'Krasnodar', id: 'krdr'}
    ]
});