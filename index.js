function Apod(id){
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);

    this.addPictureOfDay  = function() {
        let element = document.createElement('div');
        if(this.date === undefined) {
          
        
           this.date=(new Date().getFullYear() +'-'+''+( new Date().getMonth()+1)+'-'+ ''+( new Date().getDate()))
           
          
        } else {
           // this.date =new Date(this.date.setDate((new Date().getFullYear() +'-'+''+( new Date().getMonth()+1)+'-'+ ''+( new Date().getDate()-1))))
           
          
        }
        
        fetch('https://api.nasa.gov/planetary/apod?api_key=AgAOKPwUaNaoMb7jMr4ETKQGGqlMtzRNGwSVaHNf&date='+this.date)
    .then(response => response.json())
    .then(data => renderApp(data))

function renderApp(data) {
    let body = document.body;
    let title = document.createElement('h1');
    title.innerText = data.title;
    

    let imageDiv = document.createElement('div');
    
    imageDiv.classList.add('image');

    if(data.media_type === 'video') {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', data.url);
        iframe.setAttribute('width', '450');
        iframe.setAttribute('height', '300');
        imageDiv.append(iframe);

    } else {
        let image = document.createElement('img');
        image.setAttribute('src', data.url);
        image.setAttribute('width', '450');
        image.setAttribute('height', '300');
        imageDiv.append(image);
    }
    
    
    body.append(title);
    body.append(imageDiv);
  
}

        element.innerText = this.date;
        this.container.append(element)
    }
    this.addPictureOfDay ();
    body.append(this.container);
}

const apod = new Apod('apod');
