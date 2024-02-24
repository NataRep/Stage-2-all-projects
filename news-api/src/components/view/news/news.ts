import './news.css';
//интерфейсы
import { IArticle } from '../../../utils/interfaces';

class News {
    public draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItemEl = newsClone.querySelector('.news__item') as HTMLElement;
                newsItemEl.classList.add('alt');
            }

            const newsMetsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsMetsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAutorEl = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAutorEl.textContent = item.author || item.source.name;

            const newsMetaDataEl = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsMetaDataEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitleEl = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsDescriptionTitleEl.textContent = item.title;

            const newsDescriptionSourceEl = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsDescriptionSourceEl.textContent = item.source.name;

            const newsDescriptionContentEl = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsDescriptionContentEl.textContent = item.description;

            const newsReadMoreLinkEl = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            newsReadMoreLinkEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsEl = document.querySelector('.news') as HTMLElement;
        newsEl.innerHTML = '';
        newsEl.appendChild(fragment);
    }
}

export default News;
