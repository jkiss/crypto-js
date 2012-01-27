/**
 * Output Feedback block mode.
 */
CryptoJS.mode.OFB = {
    encrypt: function (message, cipher, iv) {
        // Shortcuts
        var messageWords = message.words;
        var messageWordsLength = message.sigBytes / 4;
        var cipherBlockSize = cipher._blockSize;
        var keystream = iv.clone();
        var keystreamWords = keystream.words;

        // Encrypt each block
        for (var offset = 0; offset < messageWordsLength; offset += cipherBlockSize) {
            // Generate next keystream block
            cipher._encryptBlock(keystreamWords, 0);

            // Encrypt this block
            for (var i = 0; i < cipherBlockSize; i++) {
                messageWords[offset + i] ^= keystreamWords[i];
            }
        }
    },

    decrypt: function () {
        // Encrypt and decryption are identical operations
        this.encrypt.apply(this, arguments);
    }
};
