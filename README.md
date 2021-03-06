<p align="center">
  <img title="gantry" src='https://s22.postimg.org/oddz2d4fl/gantry-readme.png' />
</p>

| Build Status  | Dependencies   |  Version  | Docker Image   | Coverage  | Technical Debt   |
|---|---|---|---|---|---|
|[![Build][travis-image]][travis-url]|[![Deps!][daviddm-image]][daviddm-url]|[![Tag!][github-image]][github-url]|[![Docker][docker-image]][docker-url]|[![Coverage][coverage-image]][sonar-url]|[![Tech Debt][tech-debt-image]][sonar-url]|
> This project aims to provide graphical option for managing Docker on a remote host. It will provide container, image and network orchestration through a graphical user interface.

## Usage

Clone down this repository through your preferred means and navigate to the projects root folder. Please run:

```
npm install
```

NOTE: The project uses aspects of ES6 and might necessitate running your node process in strict mode to build correctly. Therefore in any documentation referenced within this repository you might need to swap in --use-strict as the case may be.

```
node --use-strict
```

#### Docker Container
```
docker run -d -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock scoady2/lifecycle-management-for-docker
```

#### Using Node.js
Note: The Docker API must be listening on /var/run/docker.sock
```
node index.js
```
You should now be able to navigate to http://<hostname>:3000

#### Credentials
By default the credentials are as follows:
```
user: admin

pw: admin
```

#### Run tests
```
npm test
```

#### Run coverage report
```
npm run coverage
```

## Documentation
To view the API documentation for the application navigate to http://`<hostname>`:3000/docs

## License

MIT © [Stephen Coady]()


[travis-image]: https://img.shields.io/travis/StephenCoady/gantry.svg?branch=master
[travis-url]: https://travis-ci.org/StephenCoady/gantry
[daviddm-image]: https://img.shields.io/david/StephenCoady/lifecycle-management-for-docker.svg
[daviddm-url]: https://david-dm.org/StephenCoady/lifecycle-management-for-docker
[github-image]: https://img.shields.io/github/tag/StephenCoady/lifecycle-management-for-docker.svg
[github-url]: https://github.com/StephenCoady/lifecycle-management-for-docker/releases
[docker-image]: https://img.shields.io/docker/pulls/scoady2/lifecycle-management-for-docker.svg
[docker-url]: https://hub.docker.com/r/scoady2/lifecycle-management-for-docker/
[coverage-image]: https://sonarqube.com/api/badges/measure?key=lifecycle-management-for-docker&metric=coverage
[tech-debt-image]: https://sonarqube.com/api/badges/measure?key=lifecycle-management-for-docker&metric=sqale_debt_ratio
[sonar-url]: https://sonarqube.com/dashboard?id=lifecycle-management-for-docker
