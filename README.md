# Hosting a Full-Stack Application - From udacity projects

## My Store

This project is required by Udacity as part of the JS Fullstack nanodegree.
The repository contains mystore-api as well as mystore-fronend, both projects built on previous Udacity lessons and leveradged to be used in this hosting and autodeploying project.

URL http://mystore-angular-lucymtc.s3-website-us-east-1.amazonaws.com/

**Known issues** : API is currently not working on Elastic Beanstalk Environment.

---

### Dependencies and configuration.

- Node v16 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version
- npm 7 (LTS) or more recent
- AWS CLI v2
- RDS database running Postgres.
- S3 bucket

### Application Diagram
- created with https://online.visual-paradigm.com/

![Diagram](./documentation/images/diagram.png)

### CircleCi Pipeline Process
- Prepare environment by setting up Node & npm, AWS CLI, EB CLI.
- Install dependencies for FrontEnd app
- Install dependencies for Back End API
- Deploy Front End APP
- Deploy Back End API

### Configuration screenshots

**MyStore CircleCI**
![Build & Deploy pass](./documentation/images/circleAPI_deploy.png)

![CircleCI Env variables](./documentation/images/circleci-env.png)

**MyStore APP front end S3 Bucket**

![MyStore S3 Bucket](./documentation/images/mystore-udacity-s3bucket.png)

**MyStore RDS database on Postgres**

![MyStore RDS Database](./documentation/images/mystore-udacity-database.png)

**MyStore Elastic Beanstalk**
Known issue to be fixed, health degraded, cause: Impaired services on all instances.

![MyStore RDS Database](./documentation/images/mystore-udacity-eb.png)
