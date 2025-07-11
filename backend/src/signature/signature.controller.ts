import { Body, Controller, Post, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { SignatureService } from './signature.service';
import { VerifySignatureDto, VerifySignatureResponseDto } from './dto/verify-signature.dto';

@Controller('api')
export class SignatureController {
    private readonly logger = new Logger(SignatureController.name);

    constructor(private readonly signatureService: SignatureService) { }

    @Post('verify-signature')
    @HttpCode(HttpStatus.OK)
    async verifySignature(@Body() verifySignatureDto: VerifySignatureDto): Promise<VerifySignatureResponseDto> {
        this.logger.log('POST /api/verify-signature called');
        return this.signatureService.verifySignature(verifySignatureDto);
    }

} 