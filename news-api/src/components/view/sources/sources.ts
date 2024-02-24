import './sources.css';
import { ISources } from '../../../utils/interfaces';

class Sources {
    public draw(data: ISources[]) {
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
            }
        });

        const sourceEl: HTMLElement | null = document.querySelector('.sources');
        if (sourceEl) {
            sourceEl.append(fragment);
        }
    }
}

export default Sources;
