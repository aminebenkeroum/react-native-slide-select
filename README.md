# Slide Select for React Native
This is a small component I used in one of my earlier projects, a select component with next/previous arrows, can handle images and text values.

### Installation

You can copy SelectSlide.js directly in your components folder, and require it wherever you want to use it

List of component props :


 - data: Array with your options values
 - isImage: false by default, true if you have an array of images URIs.
 - arrowsSize: The size of the arrows Icon (25 by default)
 - arrowsColor: the color of the Arrows (white by default)

Quick examples of use: 

```js
 <SlideSelect data={this.state.myImageOptionsArray} isImage={true} />
```

```js
 <SlideSelect data={this.state.myTextOptionsArray} />
```
### Deps
The component requires React Native Vector Icons for the arrows, but feel free to use any kind of representation you want.

```sh
npm install react-native-vector-icons --save
```

License
----
MIT