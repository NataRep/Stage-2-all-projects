import './sorting.css';

export class SourceSort {
    public static sort(
        newsSourcesButtons: HTMLElement[],
        sourcesButtonsEl: HTMLElement,
        sortButton: HTMLElement
    ): void {
        const reverse = [...newsSourcesButtons].sort((a: HTMLElement, b: HTMLElement) => {
            const spanA = a.querySelector('.source__item-name') as HTMLElement;
            const spanB = b.querySelector('.source__item-name') as HTMLElement;
            const nameA: string = spanA.innerHTML;
            const nameB: string = spanB.innerHTML;
            return nameB.localeCompare(nameA);
        });

        sourcesButtonsEl.innerHTML = '';

        if (sortButton.classList.contains('reverse')) {
            sortButton.classList.remove('reverse');
            reverse.forEach((el) => {
                sourcesButtonsEl.append(el);
            });
        } else {
            sortButton.classList.add('reverse');
            newsSourcesButtons.forEach((el) => {
                sourcesButtonsEl.append(el);
            });
        }
    }
}
