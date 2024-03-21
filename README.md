This package allows you to use a list of icons from a lot of different sources.

The package is created from the React project: [react-icons](https://github.com/react-icons/react-icons) - For more info, check their Github page.

If you would like a list of the icons, and a way to search through them, check out react-icon's icon website [here](https://react-icons.github.io/react-icons/).

## Getting started

You can install the latest version using `pub add`.
```bash
flutter pub add ultimate_flutter_icons
```

You can then import the package like so:
```dart
import 'package:ultimate_flutter_icons/flutter_icons.dart';
```

## Usage

To add an icon to your app, you simply need to import the package and the specify which icon you want to use:

```dart
import 'package:flutter/material.dart';
import 'package:ultimate_flutter_icons/flutter_icons.dart';

class IconTest extends StatelessWidget {

  const IconTest({super.key});

  @override
  Widget build(Object context) {
    return Scaffold(
      body: Center(
        child: AI.AiFillAccountBook()
      ),
      backgroundColor: Colors.white,
    );
  }
}
```

## Properties

You can also change the following properties

### [double] size
Changes the size of the icon. Technically it sets the width and height of the icon.

It defaults to `16`.

Example:
```dart
AI.AiFillAccountBook(size: 32)
```
This will make the icons dimensions 32x32.

### [Color] color
Changes the color of the icon.

It defaults to `Colors.black`

Example:
```dart
AI.AiFillAccountBook(color: Color(0xFFFF00FF))
```
This will make the icons color to #FF00FF (purple) and no alpha.

## Additional information

The following are the icon-sources used in this project - If using the icons, please check out the icon-sources licenses:
| Icon Library                                                            | License                                                                                           | Version                                  | Count |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----: |
| [Circum Icons](https://circumicons.com/)                                | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)                 | 1.0.0                                    |   288 |
| [Font Awesome 5](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 5.15.4-3-gafecf2a                        |  1612 |
| [Font Awesome 6](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 6.4.2                                    |  2025 |
| [Ionicons 4](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 4.6.3                                    |   696 |
| [Ionicons 5](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 5.5.4                                    |  1332 |
| [Material Design icons](http://google.github.io/material-design-icons/) | [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | 4.0.0-90-g1ea21d5429                     |  4341 |
| [Typicons](http://s-ings.com/typicons/)                                 | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                                   | 2.1.2                                    |   336 |
| [Github Octicons icons](https://octicons.github.com/)                   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                                     | 18.3.0                                   |   264 |
| [Feather](https://feathericons.com/)                                    | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                                | 4.29.1                                   |   287 |
| [Lucide](https://lucide.dev/)                                           | [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE)                                   | v4.11.0-15-g7493227d                     |  1215 |
| [Game Icons](https://game-icons.net/)                                   | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                         | 12920d6565588f0512542a3cb0cdfd36a497f910 |  4040 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/)           | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                         | 2.0.12                                   |   219 |
| [Devicons](https://vorillaz.github.io/devicons/)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.8.0                                    |   192 |
| [Ant Design Icons](https://github.com/ant-design/ant-design-icons)      | [MIT](https://opensource.org/licenses/MIT)                                                        | 4.3.1                                    |   789 |
| [Bootstrap Icons](https://github.com/twbs/icons)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.11.1                                   |  2716 |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)                 | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 3.5.0                                    |  2537 |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons)          | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.2                                    |   329 |
| [Grommet-Icons](https://github.com/grommet/grommet-icons)               | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 4.11.0                                   |   635 |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.6                                    |   460 |
| [Heroicons 2](https://github.com/tailwindlabs/heroicons)                | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.0.18                                   |   876 |
| [Simple Icons](https://simpleicons.org/)                                | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)                           | 9.20.0                                   |  2753 |
| [Simple Line Icons](https://thesabbir.github.io/simple-line-icons/)     | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.5.5                                    |   189 |
| [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)                | [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)             | d006795ede82361e1bac1ee76f215cf1dc51e4ca |   491 |
| [BoxIcons](https://github.com/atisawd/boxicons)                         | [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)                      | 2.1.4                                    |  1634 |
| [css.gg](https://github.com/astrit/css.gg)                              | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.1.1                                    |   704 |
| [VS Code Icons](https://github.com/microsoft/vscode-codicons)           | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                                         | 0.0.35                                   |   439 |
| [Tabler Icons](https://github.com/tabler/tabler-icons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.40.0                                   |  4836 |
| [Themify Icons](https://github.com/lykmapipo/themify-icons)             | [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)    | v0.1.2-2-g9600186                        |   352 |
| [Radix Icons](https://icons.radix-ui.com)                               | [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)                                      | @radix-ui/react-icons@1.3.0-1-g94b3fcf   |   318 |
| [Phosphor Icons](https://github.com/phosphor-icons/core)                | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE)                                   | 2.0.2                                    |  7488 |
| [Icons8 Line Awesome](https://icons8.com/line-awesome)                  | [MIT](https://github.com/icons8/line-awesome/blob/master/LICENSE.md)                              | 1.3.1                                    |  1544 |