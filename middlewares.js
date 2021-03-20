import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' }); // "/uploads/videos/" 라고 쓰면 컴퓨터의 로컬에 비디오를 저장한다. 주의

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single('videoFile');
// upload.pug에 input type file의 name에 videoFile가 들어간다.
