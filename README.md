
![resim](https://user-images.githubusercontent.com/91319943/194228682-4e4f6bf6-f55d-4509-a688-d8e12f9394ce.png)
	
It's practicum work for popsmart.
Tailwind, SCSS, NextJs and Jest is used for it.
	
**Folders** :	

**Styles**	SCSS files for css design. It's write with tailwind. Especially Arbitrary Operators used a lot.

**Sections**	Index Page's sectional parts are in this folder. Every section has a one file and some sections
	supported with components. Sections, update and received data from context api. Control and View models combined in Its Section.
## 11 components is missing
## Jest Tests are missing
## livedemo : https://ppsmrt.vercel.app/    ----- it has first render defaul error , I cant solve until finalcase delivery date -----


**Modals**	Every modals designed in this folder. And generic css design supported with __modals.scss in style folder.
	But some unique items is written with JSX Inline Css Codes.
	Initial datas in the defaultcontent files. These files connected with PageList 
	as Array under component and with {name} prop, it is rendered due to this prop on grid section or right side bar.
	if it is input value, it must be writted as <input>string</input> in defaultcontent and is used with dangerouslyInnetHtml in modals. 
  
**Functions**	It has context Api for send and receive data. And it has uploadApi for upload operations
**Components**	Some functional operations in these area.
	Upload as used controller for Upload Api
	SwitchButton is visual component for buttons
	PageList is used for distribution grid section and sidebar section
	Language as used controller in language menu
  
**jsfile**	It's has native js file and builded and renamed css file. When outer codes putted in html file, this js file must be
	referened with url in hosting or another area.
	Script run with pop() function and codes variable contains outer datas.
	Data name must be match for calling styles names. 
	Also every modals html codes must be have: 
	"main_container"  and "cardAnim"  for loading animations.
	If all backround will change, card class must be have ${codes.color}
	for getting inputvalue, input values must be have inputVal Id
  
**styling**	all modals have cards-xxx named created with scss with Size Array list (width-heigt)
	also generic h2 / input / icon is generated in this folder
	
	
![resim](https://user-images.githubusercontent.com/91319943/194229477-4d2ed6e4-2eb9-4c72-8c77-23853f488c28.png)

![resim](https://user-images.githubusercontent.com/91319943/194229568-bd1cb783-d2e3-4fb9-ad27-7c16d6bac64d.png)

![resim](https://user-images.githubusercontent.com/91319943/194229601-e87cdef5-7249-4156-a8a2-aa46521407cc.png)


![resim](https://user-images.githubusercontent.com/91319943/194229908-4a846f45-be32-4f1a-9191-e21f77d92aee.png)

