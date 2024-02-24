import './sorting.css';

export class SourceSort {
    public static sort(): void {
        const newsSourcesButtons: HTMLElement[] = Array.from(document.querySelectorAll('.source__item'));
        const sourcesButtonsEl = document.querySelector('.sources.buttons') as HTMLElement;
        const sortButton = document.querySelector('.button_sort') as HTMLElement;

        sortButton.addEventListener('click', () => {
            const reverse = [...newsSourcesButtons].sort((a: HTMLElement, b: HTMLElement) => {
                const spanA = a.querySelector('.source__item-name') as HTMLElement;
                const spanB = b.querySelector('.source__item-name') as HTMLElement;
                let nameA: string = spanA.innerHTML;
                let nameB: string = spanB.innerHTML;

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
        });
    }
}
