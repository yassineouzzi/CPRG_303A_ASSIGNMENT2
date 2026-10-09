# Amazon.ca App Clone

CPRG 303A, Assignment 2: Advanced Multi-Screen Mobile Application with Collaborative Navigation.

A React Native (Expo, TypeScript) recreation of five screens from the Amazon.ca mobile app, built with Expo Router. All content is mock data; nothing is connected to Amazon.

Author: Yassine OUZZI (GitHub: `yassineouzzi`), solo project.

## Reference screens

The app was built against screenshots taken from the Amazon.ca phone app. I blurred some personal details in them.

| Screen | Reference | Route |
| --- | --- | --- |
| Home | `reference/home.jpg` | `/(tabs)/index` |
| Same-Day Store | `reference/same-day.jpg` | `/same-day` |
| Haul | `reference/haul.jpg` | `/haul` |
| Profile (You) | `reference/profile.jpg` | `/(tabs)/you` |
| Cart | `reference/cart.jpg` | `/(tabs)/cart` |

A sixth screen, Menu (`/(tabs)/menu`), completes the four-icon tab bar.

## Navigation

- **Tabs** (`src/app/(tabs)`): Home, You, Cart, Menu. The active tab shows a black indicator bar and the cart icon shows an item count.
- **Stack**: the root stack pushes **Same-Day Store** from the Home chip (and from the Menu list) with a back arrow.
- **Modal**: **Haul** opens as a full-screen modal from the Home chip and closes with the X. It has its own five-icon tab bar.

```
Root Stack
├── (tabs)  Tabs: index, you, cart, menu
├── same-day  (stack push, back arrow)
└── haul      (full-screen modal, close button)
```

## Project structure

```
src/
├── app/            Screens and layouts only (Expo Router)
├── components/     Reusable UI components
├── constants/      theme.ts (colors, spacing, radius, font sizes), images.ts
├── data/           Mock data
└── types/          TypeScript types
assets/images/      Local images (products/ and the flag)
```

## Components

| Component | Used by |
| --- | --- |
| `SearchBar` | Home, Same-Day, Cart, Profile, Haul, Menu |
| `TanHeader` | Same-Day, Cart, Profile, Menu |
| `HomeHeader` | Home |
| `Pill` | Home chips, Profile shortcuts |
| `SectionHeader` | Home, Same-Day, Cart, Profile |
| `ProductCard` (default and store variants) | Home, Same-Day, Haul |
| `ProductRow` | Home, Same-Day |
| `CategoryTile` | Same-Day, Haul |
| `ViewedItemTile` / `ViewedItemGrid` | Cart, Profile |
| `RatingStars` | Product cards |
| `ProfileGreeting` | Profile |
| `HaulHeader`, `HaulBanner`, `HaulTabBar` | Haul |

### Component organization rules

- A component gets its own file when it is reused in two or more places, or when it is large (about 40 to 50 lines or more).
- Small, single-use pieces stay in the screen file that uses them.
- Every component has a typed props object (`XxxProps`), named exports, and a PascalCase file name.
- Screens live in `src/app`; everything else lives outside it.
- Colors, spacing, radius, and font sizes come from `src/constants/theme.ts`.
- Icons come from `@expo/vector-icons` (Ionicons) instead of the unicode characters I used in the last assignment, so they scale and are easier to maintain.
- Lists use stable `id` keys from the data.

## Images

- Product images in `assets/images/products/` were cropped from the reference screenshots of the Amazon.ca app, since this is for educational use only.
- `assets/images/canada_flag.jpg` is a downloaded flag image from google free images.
- No images are loaded from the network.


## Tech ressources/dependancies used:

Expo SDK 57, Expo Router, React Native, TypeScript, `expo-linear-gradient`, `@expo/vector-icons`.