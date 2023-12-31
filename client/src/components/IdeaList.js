import IdeasApi from "../services/ideasApi"; 
class IdeaList{
    constructor(){
        this._ideaListEL=document.querySelector("#idea-list");
        this._ideas=[
            // {id:1,text:"Ideia 01",tag:"Descrição da ideia 01",username:'amin'},
            // {id:1,text:"Ideia 02",tag:"Descrição da ideia 01",username:'amin'},
        ];
        this.getIdeas();

    this._validTags= new Set();
    this._validTags.add('technology');
    this._validTags.add('softwere');
    this._validTags.add('business');
    this._validTags.add('education');
    this._validTags.add('health');
    this._validTags.add('inventions');
} 
async getIdeas() {
    try {
        const res=await IdeasApi.getIdeas();
        this._ideas=res.data.data;
        
        this.render();

    } catch (error) {
        console.log(error);
    }
}

    getTagClass(tag){
        tag= tag.toLowerCase();
        let tagClass='';
        if (this._validTags.has(tag)) {
            tagClass=`tag-${tag}`
        }
        else{
            tagClass ='';
        }
        return tagClass;
    }

render(){
    this._ideaListEL.innerHTML=this._ideas.map((idea)=>{
        
        const tagClass=this.getTagClass(idea.tag)
        return`
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
        `
    }).join('')
}
}

export default IdeaList ;