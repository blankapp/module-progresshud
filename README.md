# @blankapp/plugin-progresshud

## Quick Start

### Installation

Install `@blankapp/plugin-progresshud` and link in your project:

```bash
$ yarn add @blankapp/plugin-progresshud
```

Or

```
$ yarn add git+https://github.com/blankapp/plugin-progresshud
```

### Mostly automatic installation

`$ react-native link @blankapp/plugin-progresshud`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@blankapp/plugin-progresshud` and add `RNProgressHUD.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNProgressHUD.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import org.blankapp.progresshud.RNProgressHUDPackage;` to the imports at the top of the file
  - Add `new RNProgressHUDPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':@blankapp/plugin-progresshud'
  	project(':@blankapp/plugin-progresshud').projectDir = new File(rootProject.projectDir, 	'../node_modules/@blankapp/plugin-progresshud/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':@blankapp/plugin-progresshud')
  	```

## Usage
```javascript
import ProgressHUD from '@blankapp/plugin-progresshud';

ProgressHUD.show();
ProgressHUD.dismiss(1500);
```

## License

```text
MIT License

Copyright (c) 2018 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
  