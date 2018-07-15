import axios from 'axios';

export function fetchData () {
  return function (dispatch) {
    fetch("https://jsdemo.envdev.io/sse").then((response) => {
      const reader = response.body.getReader();

      const stream = new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              var encodedString = String.fromCharCode.apply(null, value),
              decodedString = decodeURIComponent(escape(encodedString));
              decodedString = "{" + decodedString + "}";
              decodedString = decodedString.replace(/'/g,"\"").replace("data", "\"data\"");
              decodedString = JSON.parse(decodedString);

              if (done) {
                controller.close();
                return;
              }
              
              dispatch({type: 'FETCH_DATA', payload: decodedString.data})

              controller.enqueue(value);
              push();
            });
          };
        
          push();
        }
      });

      return new Response(stream, { headers: { "Content-Type": "application/json" } });
    })
  }
}
