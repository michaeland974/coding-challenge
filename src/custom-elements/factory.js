export const CustomElementFactory = {
	createElement(html){
		const template = document.createElement("template");
		template.innerHTML = html;
		
		return (
			class CustomElement extends HTMLElement{
				constructor(){
					super();
					const content = template.content.cloneNode(true);
					this.innerHTML = content;
				}
			}
		);
	}
};

