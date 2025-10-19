
👋 Welcome to LWC Learning Project

This repository, titled Learning Apex LWC, is part of my hands-on Salesforce learning journey. I’m Shahid, a Salesforce Developer passionate about mastering Lightning Web Components (LWC), Apex, and integration concepts through practical examples and self-built mini-projects. Each component in this repo represents a real learning step — from simple variable updates to complex wire services, decorators, and pub/sub communication using LMS.

All component folders are located under the following path:

force-app → main → default → lwc


Inside the lwc folder, you’ll find individual component folders — each containing its own HTML, JavaScript, and metadata files that demonstrate a specific LWC concept.

Through these exercises, I explored core LWC fundamentals such as component reactivity, decorators (@track, @api, @wire), event handling, data fetching using UI API, integration with Flows, styling with static resources, and inter-component communication. This repository reflects my structured approach to learning Salesforce development by coding every concept step-by-step.



Description about the Repo.

**🧮 Calculator(Repo - calculator, Child Component Repo - calculatorChildOperations)**

The Calculator was one of my first working Lightning Web Components, marking the beginning of my LWC learning journey. It consists of a parent component named calculator and a child component named calculatorChildOperation. The parent component holds two input fields that capture numeric values, while the child handles the actual arithmetic logic. This setup helped me understand the parent-to-child communication model in LWC and how data can be passed between components through properties.

<img width="1439" height="317" alt="Screenshot 2025-10-19 at 8 33 48 PM" src="https://github.com/user-attachments/assets/76a88042-7640-433d-8531-a99f55d3a18a" />

While developing this component, I implemented the four basic arithmetic operations — addition, subtraction, multiplication, and division — inside the child component’s JavaScript file. The parent component dynamically sends user inputs to the child for processing, and the computed result is rendered back in real-time. This exercise not only strengthened my grasp of data binding and event flow but also gave me practical exposure to modular component architecture within Salesforce LWC.

<img width="1440" height="325" alt="Screenshot 2025-10-19 at 8 35 35 PM" src="https://github.com/user-attachments/assets/1708770b-1ee5-4168-ba10-621ee2570b05" />





**🎨 CSS Library (CSSLib)**

This component was built to explore how external CSS files can be reused and shared across multiple Lightning Web Components. In this setup, I created a dedicated CSSLib component that contained only a .css file, with no HTML or JavaScript files. The goal was to understand how to centralize styling logic and link it to other components within the Salesforce Lightning framework.
After creating the CSS library, I imported it into another component named secondLwcComponent. Inside that component, I also experimented with internal CSS while applying styles from the external library to HTML elements. This exercise helped me understand the difference between scoped and shared styles in LWC, and how external style libraries can be used to maintain a consistent UI across multiple components.


**🔄 Flow Practice(Repo - flowPractice)**

This component was developed to understand how Lightning Web Components can interact seamlessly with Salesforce Screen Flows. In this example, I created a Flow named FlowPractice that collects user input directly from a flow screen. The entered value is passed into the LWC as an input variable, processed within the component’s JavaScript, and then returned back to the flow for display. This exercise helped me connect the dots between declarative tools like Flow and custom-coded solutions in LWC.

<img width="1437" height="355" alt="Screenshot 2025-10-19 at 8 27 41 PM" src="https://github.com/user-attachments/assets/58ba2b6f-af4e-4b9c-a375-16f43fad263b" />

In this project, I added a text input screen in the flow to capture user data and a display text element to show the processed output. The key learning was how to define @api properties in LWC to accept flow variables and send data back using output attributes. It was a great hands-on experience in blending low-code automation with custom Lightning Web Components to achieve dynamic and flexible UI behavior.

<img width="1440" height="353" alt="Screenshot 2025-10-19 at 8 28 03 PM" src="https://github.com/user-attachments/assets/27b4fe04-d053-4ff6-a0e4-195225bccc89" />





**🧾 Get Object Information(Repo - getObject)**

This component was created to display all fields of the Account object using the @wire service with getObjectInfo from the lightning/uiObjectInfoApi. It dynamically fetched the field names and labels of the Account object and displayed them in a scrollable list on the UI.

<img width="1440" height="647" alt="Screenshot 2025-10-19 at 8 41 53 PM" src="https://github.com/user-attachments/assets/92c14c36-3b2b-45c9-8ff0-ea74694aec68" />

<img width="1429" height="649" alt="Screenshot 2025-10-19 at 8 42 11 PM" src="https://github.com/user-attachments/assets/d6b4056f-309a-4003-a444-7649269208be" />
This helped me understand how to retrieve and render object metadata such as field API names, labels, and types without writing Apex. It gave me hands-on experience with Salesforce’s UI API and the power of declarative data access in LWC.
<img width="1426" height="514" alt="Screenshot 2025-10-19 at 8 42 28 PM" src="https://github.com/user-attachments/assets/5e3229a1-98a3-47c4-8a0d-ef61c1a4a94d" />





**🧩 Object Nested (@track Decorator Practice)(Repo - objectNested)**

This was a simple experiment to test the reactivity of nested objects using the @track decorator. I defined an object named mydetails with fields like firstname, lastname, and age, and updated the lastname property through a button click.
<img width="1439" height="236" alt="Screenshot 2025-10-19 at 8 56 41 PM" src="https://github.com/user-attachments/assets/218c0bcb-e3dd-40e3-a2cc-fa300d221619" />

When the property was updated from “Doe” to “Singh,” the change immediately reflected on the HTML page, confirming how @track enables reactivity for object fields.
<img width="1440" height="213" alt="Screenshot 2025-10-19 at 8 57 00 PM" src="https://github.com/user-attachments/assets/91dea63f-72e0-4e8d-9a49-2a6c33d3bc84" />


**🔢 Primitive Property(repo-Primitive Property)**

A simple component where I changed a primitive variable’s value on a button click to observe reactivity. It helped me understand that primitive values update the UI directly, unlike object properties without tracking.



**📡 Pub/Sub with Lightning Message Service (LMS)(repo- publisher,subscriber,messageChannel)**

I built this to learn eventing across unrelated components using Lightning Message Service. First, I created a message channel (under force-app/main/default/messageChannels) to define the payload contract and scope. Then I added a Publisher component that imports the channel and publishes a message when the user interacts. Following Salesforce docs as a guide, I focused on the standard pattern—import channel, create message, and call publish()—to keep it simple and clean.

Publisher Model
<img width="1439" height="268" alt="Screenshot 2025-10-19 at 9 15 33 PM" src="https://github.com/user-attachments/assets/86262837-01f1-41a0-8a06-168221e71b6e" />

Subscriber Model
<img width="1440" height="278" alt="Screenshot 2025-10-19 at 9 15 46 PM" src="https://github.com/user-attachments/assets/b1eb7364-8332-469b-bb23-0c86980ea2a2" />

Next, I created a Subscriber component that imports the same channel and uses subscribe() to receive messages in real time. This helped me understand how LMS enables communication between sibling components, different DOM trees, and even across Lightning pages without parent–child wiring. Overall, it cemented the difference between classic pub-sub utilities and the platform-native LMS approach for scalable component messaging.

📋 Lightning Record Form(repo - record Form)
In this component, I explored the use of the lightning-record-form base component to quickly create record forms without custom Apex or additional logic. I created two versions — one that allowed users to view, edit, and create records, and another that was set as read-only to display record data securely. This helped me understand how Salesforce automatically handles layouts and field-level access in standard forms.

<img width="1425" height="512" alt="Screenshot 2025-10-19 at 9 25 20 PM" src="https://github.com/user-attachments/assets/0d7a00d0-9d41-40e4-bebb-e3cf491bf0e6" />

Through this exercise, I learned how to configure form modes (view, edit, readonly), dynamically reference object API names, and let Salesforce handle DML operations behind the scenes. It’s one of the simplest yet most powerful ways to manage records declaratively within LWC.



**🔁 Iterator Practice(repo- render list)**

This component focused solely on using the iterator directive in LWC to loop through a list of records. I passed a list containing record IDs and displayed each record’s details inside a <div> using the iterator syntax.

<img width="1440" height="223" alt="Screenshot 2025-10-19 at 9 28 38 PM" src="https://github.com/user-attachments/assets/5160329c-c329-4d9c-afe2-f19740c471c8" />


It helped me understand how the iterator directive provides access to current and previous elements, making it easier to manage complex lists during rendering.



**🎞️ Static Resource(repo - staticResource)**

In this component, I learned how to use Static Resources along with user context information in LWC. I uploaded a CSS file and an image as static resources and loaded them using the loadStyle and @salesforce/resourceUrl imports. The animated text and image were displayed inside a Lightning Card, adding a visual element to the component.

<img width="1435" height="642" alt="Screenshot 2025-10-19 at 9 32 01 PM" src="https://github.com/user-attachments/assets/cb1a30ce-db67-4547-b570-511de6fa332f" />


Additionally, I fetched the current User ID and checked user permissions directly in the component to display contextual information, as shown in the output. This helped me understand how to combine static resources with Salesforce user data to create interactive and personalized Lightning components.


📡 Wire Method with Property → Data Table(repo - wireMethodWithProperty)
This component explores using the @wire decorator with a property to fetch records reactively and display them in a lightning-datatable. I wired a data source (Apex/UI API) to a public property so that results populate automatically without imperative calls. The focus was on clean, declarative data loading, handling the data/error states, and defining table columns for readable output.

<img width="1432" height="460" alt="Screenshot 2025-10-19 at 10 41 45 PM" src="https://github.com/user-attachments/assets/631493d7-7675-4a4e-972f-dcb1ce701401" />


Building it taught me how wired properties differ from wired functions, how reactive parameters trigger automatic refresh, and how to surface records in a table with minimal code. I also practiced mapping fields to column definitions, showing loaders/errors in the template, and keeping the UI responsive as data arrives.



**⚙️ Wire Method with Function(Repo - wiredFunction)**

This component was created to practice using the @wire decorator with a function for more control over fetched data. I retrieved records through the wire service and handled the response in data and error form. After fetching, I applied a simple condition — if the record name was Edge Communications, its phone number was updated.
This exercise helped me understand how wired functions allow post-processing or conditional manipulation of data before rendering. It also clarified how error handling and reactive data flow work when using wired methods in functional form.







