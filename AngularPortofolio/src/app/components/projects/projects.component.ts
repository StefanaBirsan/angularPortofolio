import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any = [
    {
      title: 'Angular Users Project',
      description:
        ' A list of users obtained from a public API can be seen by clicking the main button. The final user will have the following options: see the whole list of users, filter the users only by name, modify the information about a specific user or delete a specific user after confirming the action.',
      tech: ' ANGULAR || HTML || CSS || JAVASCRIPT || BOOTSTRAP ',
      abilities:
        'API Calls | HTTP Requests | Angular Routes | Angular template-driven form | Angular Service | Interpolation | Property Binding',
      link: 'https://birsanstefana-angular-users-project.netlify.app/',
    },
    {
      title: 'React Tenzies Game',
      description:
        ' The final user can roll until all dice are the same. Click each die to freeze it at its current value between rolls. Added functionality: the user can see how many times he rooled the dice before winning the game.',
      tech: ' REACT || HTML || CSS || JAVASCRIPT || BOOTSTRAP ',
      abilities: 'JSX | React Components | useState | React Animation',
      link: 'https://birsanstefana-tenzis.netlify.app/',
    },
    {
      title: 'API Table',
      description:
        ' A list of users can be seen by clicking the main button. Information like id, name, username, email, address or company obtained from a public API will be available. By clicking on the PLUS button from the end of the row, complete information about specific user will be available.',
      tech: 'HTML || CSS || JAVASCRIPT || BOOTSTRAP',
      abilities: 'API Calls | HTTP Requests | Bootstrap Modals | Dynamic Table',
      link: 'https://birsanstefana-apitable.netlify.app/',
    },
    {
      title: 'Library',
      description:
        'The user can add a new book, its author, title, number of pages or publish date. He can use the complete button after he read it, he can delete or edit the info about that specific book.',
      tech: 'HTML || CSS || JAVASCRIPT || BOOTSTRAP',
      abilities: 'Local Storage | Filtering | Form',
      link: 'https://birsanstefana-libraryproject.netlify.app/',
    },
    {
      title: 'To Do List',
      description:
        'The final user can add a task, can use the available buttons to complete or delete it. He can also see a list of previous added tasks and filter them by teir state: complete, uncomplete or all.',
      tech: 'HTML || CSS || JAVASCRIPT || BOOTSTRAP',
      abilities: 'Local Storage | Filtering | Form',
      link: 'https://birsanstefana-todolist.netlify.app',
    },
    {
      title: 'Beat Maker',
      description:
        'The final user can select different sounds represented by colorful squares and play that beat. He can add multiple sounds, modify the intensity or the tempo. He can also choose to mute specific tracks.',
      tech: 'HTML || CSS || JAVASCRIPT ',
      abilities: 'JS CLASS | JS CONSTRUCTOR | JS THIS KEYWORD',
      link: 'https://birsanstefana-flickphotosearch.netlify.app/',
    },
    {
      title: 'Flickr Photo Search',
      description:
        'The final user can add a category or multiple separated by commas. After clicking the search button, he will obtain a list of images based on the specified categories.',
      tech: 'HTML || CSS || JAVASCRIPT || BOOTSTRAP ',
      abilities: 'API CALLS | HTTP REQUEST | ASYNC AWAIT | ASYNCHRONOUS CODE',
      link: 'https://birsanstefana-beatmaker.netlify.app/',
    },
    {
      title: 'Travelly',
      description: 'Travel Website',
      tech: 'HTML || CSS  ',
      abilities: 'MOBILE RESPONSIVENESS | FLEXBOX | CSS ANIMATION',
      link: 'https://birsanstefana-travelly.netlify.app/',
    },
    {
      title: 'Elena Joy Photography',
      description: 'Photography Website',
      tech: 'HTML || CSS ',
      abilities:
        'MOBILE RESPONSIVENESS | CSS GRID | CSS ANIMATION | ACCESIBILITY',
      link: 'https://birsanstefana-photography.netlify.app/',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    //   const obj: any = {
    //     a: 'ciao',
    //     b: 'ciao',
    //     c: 'ciao',
    //     d: 'ciao',
    //   };
    //   const keys = ['a', 'b', 'c', 'd'];
    //   const obj1 = {
    //     ...Object.fromEntries(keys.map((key) => [key, 'ciao'])),
    //   };
    //   console.log(obj);
    //   console.log(obj1);
    // }
  }
}
