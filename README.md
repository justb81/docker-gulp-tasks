# Docker Gulp Tasks
Docker-Image with ready-to-use Gulp-Tasks.

## Usage
This Docker container runs by itself with your given config. We have a couple of predefined tasks that you may use.

### Prerequisites
You need [Docker installed](https://docs.docker.com/engine/installation/) and [your user having rights to run containers](https://docs.docker.com/engine/installation/linux/ubuntulinux/#create-a-docker-group).

### Development
To use the container follow these simple steps:
1. copy the contents of the `example` directory to your project.
2. change the `gulp_config.json` to meet your requirements
3. make the `gulp`-File executable
4. run `./gulp build:dev` or `./gulp watch`
5. see gulp running for you, without having to worry with nodejs, module dependencies, complex tasks configuration

### build process
To use this container in your build-process:
1. _TODO_

## Dockerhub
https://hub.docker.com/r/ipunktbs/gulp-tasks/

Build by yourself:
`docker build -t ipunktbs/gulp-tasks .`

## Tasks

### clean
Deletes the directory as defined in your `gulp_config.json`.
```js
clean: {
    path: "public/"
}
```

### copy
Copies files from one directory to another.
Can be configured to copy as many individual files or directories as you want.
```js
copy: [
  {
    src: "YOUR_PATH/**/*", //supports glob syntax
    base: "YOUR_BASE", //part of your path that will be your base; copy will start from here
    dest: "YOUR_DEST_PATH"
  }
]
```

### sass
Compiles sass and/or scss to css files using gulp-sass.
Also contains an autoprefixer, cssnano (minify), sourcemaps and gzip.
Sourcemaps will only be generated when running `gulp build:dev`.

```js
sass: {
  src: "YOUR_SRC_DIR",
  dest: "YOUR_DEST_DIR",
  gzip: true, //false if you do not want to additionally gzip your resulting css files.
  autoprefixer: {
    browsers: ["last 3 version"]
  },
  options: { //see https://github.com/sass/node-sass#options
    indentedSyntax: false,
    includePaths: []
  }
}
```

### less
Compiles less to css files using gulp-less.
Also contains an autoprefixer, cssnano (minify), sourcemaps and gzip.
Sourcemaps will only be generated when running `gulp build:dev`.

```js
less: {
  src: "YOUR_SRC_DIR",
  dest: "YOUR_DEST_DIR",
  gzip: true, //false if you do not want to additionally gzip your resulting css files.
  autoprefixer: {
    browsers: ["last 3 version"]
  },
  options: { //see https://github.com/plus3network/gulp-less#options
    paths: [],
    plugins: []
  }
}
```

### css
Just an autoprefixer, cssnano (minify) and gzip for your css files.

```js
css: {
  src: "src/css/**/*.css",
  dest: "public/css",
  gzip: true,
  autoprefixer: {
    browsers: ["last 3 version"]
  }
}
```

### browserify
Browserify / Watchify task; can be configured to use transforms (currently only ractify).
Also contains uglify, sourcemap and gzip.
Sourcemaps will only be generated when running `gulp build:dev`.

```js
"browserify": {
  "src": "YOUR/ENTRY/PATH/FILE.JS",
  "dest": "YOU/DEST/PATH/FILE.JS",
  "gzip": true, //false if you do not want to additionally gzip your resulting css files.
  "transforms": { //add your transforms here
    "ractify": {
      "extension": "html" //file extension for ractive components
    }
  }
}
```

### bower
builds your bower dependencies defined in your local bower.json

```js
bower: {
    directory: "your/bower/directory",
    dest: "your/vendor/dest"
}
```