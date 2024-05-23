# TypeScript E-commerce Frontend

> An e-commerce site frontend made only with TypeScript, Vite, and built-in JavaScript APIs.

I have completely redone this project from the ground up, this time using TypeScript and Vite.

I chose to do this because I was not happy with my old project. This is my main showcase project (at the time of writing this) and I just did not really like how the old site looked. I am still proud of it for what it was, and it was still my biggest JavaScript project yet, but it became too much for me to maintain and get back into. Along with that, I have learned a lot since making it, especially after having made some stuff using TypeScript. I also wanted to use Vite as my build tool because it makes deploying my sites way easier than without. In smaller projects its not much of a problem, but it was very difficult for me to deploy demos for my last version because I always had to mess with the filepaths, and Vite makes this easier to manage.

Along with that, I wanted to go into this project with a blank slate, bringing along everything I had learned from my last attempt. Before I had a rough start, practically having had to rebuild/refactor almost the whole project about three times because I kept learning of new methods to do things to try and keep my code more maintainable. This new attempt is an attempt to try again while maintaining the ability to keep my codebase manageable and expandable.

The mockup database was also something I did not like, and I feel as though I could have created a better mock-up server. This new attempt is also to fill that gap, as I want to learn PHP/Laravel later on and implement a real database to this site. I can't really predicate if I will ever really get into that or not, so for now I will be just doing a mockup with TypeScript or JavaScript.

The project is beyond what most would probably consider to be "simple" at this point, but I am still calling it that due to not using any frameworks besides TypeScript and Vite.

I have also decided to standardize the spelling of the project title, from ecommerce (no hyphen) to e-commerce (with hyphen).

# Using Components

## Buttons

Buttons are called `app-buttons`. There are three types, and they are `primary`, `secondary`, and `tertiary`.

The normal way to create them would be to instantiate them with code. They have several optional parameters: `iconName`, `iconType`, `type`, and `size`.

You can also add them in `HTML` using properties.

Example (icon only):

```html
<app-button
iconName="windows"
iconType="logo"
type="secondary"
size="lg"></app-button>
```

---

Example (icon + text):

```html
<app-button
iconName="windows"
iconType="logo"
type="secondary"
size="lg">Lorem Ipsum</app-button>
```

---

Example (text only):

```html
<app-button
type="tertiary"
size="sm"
>Lorem Ipsum</app-button>
```