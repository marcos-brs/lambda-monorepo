import { FileUploaderAwsAdapter } from "./file-uploader-aws.adapter";

describe('FileUploaderAwsAdapter', () => {
    let fileUploaderAwsAdapter: FileUploaderAwsAdapter;

    beforeEach(async () => {
        fileUploaderAwsAdapter = new FileUploaderAwsAdapter();
    });

    it('should return true', async () => {
        expect(await fileUploaderAwsAdapter.upload('base64File', 'destination')).toBe(true);
    })
})
