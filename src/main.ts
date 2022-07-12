import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //sirve para validar que no se envíen parámetros que no estén en el dto
      forbidNonWhitelisted: true, // esto además de whitelist manda una alerta
      transform: true,
      // TODO: LO QUE VIENE POR QUERY PARAMS LO TRANSFORMA AUTOMÁTICAMENTE
      // ESTARÁ HABILIDATO AUTOMÁTICAMENTE
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
