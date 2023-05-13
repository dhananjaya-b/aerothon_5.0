# InnovateX

We are team InnovateX. This is our solution to the Airbus 5.0 finale. 

## Proposed solution
The proposed solution involves streaming supply chain data from various sources to Kylo, performing data transformation to remove redundancy and store the latest forecasted data. This way, there are no redundant data in the data lake, which helps in building a sustainable solution. Let's break down this solution into its various components and tools used.

Data Streaming: Streaming is the process of transferring data from its source to the target system in real-time. In this solution, supply chain data is streamed from various sources using tools such as Apache Kafka or Apache NiFi.

Kylo: Kylo is a data lake management platform that provides a user-friendly interface for creating, managing, and monitoring data pipelines. In this solution, Kylo is used to ingest the supply chain data and perform data transformation.

Data Transformation: Data transformation is the process of converting data from one format to another, cleaning and filtering data, and removing redundant data. In this solution, Kylo provides a wide range of data transformation tools such as Apache Spark, Apache NiFi, and Apache Hive.

Redundancy removal: In this solution, the data is transformed to remove redundant data. This is achieved by keeping only the latest forecasted data and removing the older redundant data.

Data Lake: A data lake is a centralized repository that allows you to store all your structured and unstructured data. In this solution, Kylo is used to build a data lake where the supply chain data is stored after removing redundancy.

Overall, this solution allows for the real-time streaming of supply chain data from various sources, transformation of the data to remove redundancy, and storage of the latest forecasted data in a centralized data lake using Kylo. This enables users to access clean and up-to-date data, which can be used for various business analytics and reporting purposes.

## Screenhots

#### This is the initial landing page for the user.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/welcome.png?raw=true" height="450px"/>

#### This is the sign up page where the user can sign up and specify his department.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/signup.png?raw=true" height="450px"/>

#### This is the log in page where the user can login in to the platform.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/login.png?raw=true" height="450px"/>

#### This is the admin page where he has access to all of the data.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/admin_home.png?raw=true" height="450px"/>

### This is the dashboard for the fabrication department user.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/fab_home.png?raw=true" height="450px"/>

#### This is the dashboard for sub assembly department user.

<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/sub_asb_home.png.png?raw=true" height="450px"/>

#### This is the dashboard for the assembly department user.
<img src="https://github.com/dhananjaya-b/aerothon_5.0/blob/master/screenshots/sub_home.png?raw=true" height="450px"/>
