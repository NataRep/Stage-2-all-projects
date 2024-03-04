import './sources.css';
import { ISources } from '../../../utils/interfaces';
import { SourceSort } from '../../../components/sorting/sorting';

class Sources {
    public draw(data: ISources[]) {
        //elements for the source sorting function
        const newsSourcesButtons: HTMLElement[] = [];
        const sourcesButtonsEl = document.querySelector('.sources.buttons') as HTMLElement;
        const sortButton = document.querySelector('.button_sort') as HTMLElement;

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement | null;
            if (sourceClone) {
                const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                if (sourceItemName && sourceItem) {
                    sourceItemName.textContent = item.name;
                    sourceItem.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);

                if (sourceItem) {
                    newsSourcesButtons.push(sourceItem);
                }
            }
        });

        sortButton.addEventListener('click', () => SourceSort.sort(newsSourcesButtons, sourcesButtonsEl, sortButton));
        const sourceEl = document.querySelector('.sources') as HTMLElement;
        sourceEl.append(fragment);
    }
}

export default Sources;
