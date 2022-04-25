import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';

const fileType = {
    PNG: 'image/png',

};

const DEFAULT_PNG = {
    fileName: 'component.png',
    type: fileType.PNG,
    html2CanvasOptions: {}
};


/**
 * @param  {string} uri
 * @param  {string} filename
 */
const saveAs = (uri, filename) => {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        link.target = "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
};


function debugBase64(base64URL) {
    var win = window.open();
    win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}


const exportComponent = (node, {
    fileName,
    type,
    html2CanvasOptions,
}) => {
    if (!node.current) {
        throw new Error("'node' must be a RefObject")
    }

    const element = ReactDOM.findDOMNode(node.current);
    return html2canvas(element, {
        scrollY: -window.scrollY,
        useCORS: true,
        ...html2CanvasOptions
    }).then(canvas => {

        saveAs(canvas.toDataURL(type, 1.0), fileName);

    });
};

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='component.png'
 * @param  {object} html2CanvasOptions={}
 */
const exportComponentAsPNG = (node, parameters = {}) => exportComponent(node, { ...DEFAULT_PNG, ...parameters });



export {
    exportComponentAsPNG
};