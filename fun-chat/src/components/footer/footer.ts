import './footer.scss';

export default class Footer {
  static create(): HTMLElement {
    const footer: HTMLElement = document.createElement('footer');
    footer.className = 'footer';

    const school: HTMLElement = document.createElement('div');
    school.className = 'footer__school';
    const schoolLink = `<a href='https://rs.school'>RS School</a>`;
    school.insertAdjacentHTML('beforeend', schoolLink);
    const autor = document.createElement('div');
    autor.className = 'footer__autor';
    const autorLink = `<a href="https://github.com/Nuttik">Natalia Repkina</a>`;
    autor.insertAdjacentHTML('beforeend', autorLink);
    const copyrigth = document.createElement('div');
    copyrigth.className = 'footer__copyright';
    copyrigth.innerHTML = `2024 (c)`;

    footer.append(autor);
    autor.append(copyrigth);
    footer.append(school);

    return footer;
  }
}
