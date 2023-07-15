import {useEffect} from 'react'

function PDFWindow({ }) {

        useEffect(() => {
            const openPDFWindow = () => {
            window.open(url, '', 'height=700,width=800');
            };

            openPDFWindow();
        }, [url]);

        return null;
  return (
    <div>
       
    </div>
  )
}

export default PDFWindow