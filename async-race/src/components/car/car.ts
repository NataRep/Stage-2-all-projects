class CarEl {
  static create(color: string) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '120');
    svg.setAttribute('height', '36');
    svg.setAttribute('viewBox', '0 0 120 360');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M15.8663 94.4782C394.443 -103.556 577.791 71.7072 577.791 71.7072C759.64 69.2356 800 114.921 800 114.921C800 114.921 761.666 163.397 787.626 180.332C813.602 197.283 717.016 195.13 717.016 195.13C718.069 190.266 718.707 185.339 718.707 180.173C718.707 142.97 688.537 112.8 651.334 112.8C614.132 112.8 583.946 142.954 583.946 180.173C583.946 185.291 584.568 190.298 585.652 195.13H534.593H207.459H196.966C198.035 190.266 198.657 185.339 198.657 180.173C198.657 142.97 168.455 112.8 131.236 112.8C94.0501 112.8 63.8004 142.954 63.8004 180.173C63.8004 185.291 64.4541 190.298 65.5225 195.13C65.1876 195.13 60.7865 195.13 16.0098 195.13C-19.9327 159.076 15.8663 94.4782 15.8663 94.4782ZM359.17 74.7689H549.04C549.04 74.7689 465.052 24.6024 359.218 18.9416V74.7689H359.17ZM338.807 74.8167V18.6705C281.784 18.8459 219.865 32.7987 161.933 74.8167H338.807ZM651.414 119.561C684.678 119.561 711.595 146.447 711.595 179.694C711.595 212.91 684.678 239.843 651.414 239.843C618.183 239.843 591.25 212.91 591.25 179.694C591.234 146.463 618.167 119.561 651.414 119.561ZM651.414 202.864C664.187 202.864 674.568 192.563 674.568 179.758C674.568 166.969 664.187 156.636 651.414 156.636C638.657 156.636 628.26 166.953 628.26 179.758C628.213 192.467 638.594 202.864 651.414 202.864ZM129.833 119.561C163.065 119.561 189.982 146.447 189.982 179.694C189.982 212.91 163.065 239.843 129.833 239.843C96.6014 239.843 69.7004 212.91 69.7004 179.694C69.6525 146.463 96.6014 119.561 129.833 119.561ZM129.833 202.864C142.606 202.864 152.971 192.563 152.971 179.758C152.971 166.969 142.606 156.636 129.833 156.636C117.044 156.636 106.695 166.953 106.695 179.758C106.647 192.467 117.044 202.864 129.833 202.864Z'
    );
    path.setAttribute('fill', color);
    svg.appendChild(path);
    return svg;
  }

  static changeColor(color: string, element: HTMLElement) {
    const svg = element.querySelector('svg') as SVGElement;
    const path = svg.querySelector('part') as SVGPathElement;
    path.setAttribute('fill', color);
  }

  static changeName(value: string, element: HTMLElement) {
    const name = document.querySelector('row-car__name') as HTMLElement;
    name.innerHTML = value;
  }
}
export default CarEl;
