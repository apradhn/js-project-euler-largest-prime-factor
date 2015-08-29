describe('LargestPrimeFactor - procedural', function() {
  describe('#largestPrimeFactor(input)', function() {
    it('outputs the correct largest prime factor for 50', function() {
      expect(largestPrimeFactor(50)).toEqual(5);
    });

    it('outputs the correct largest prime factor for 13195', function() {
      expect(largestPrimeFactor(13195)).toEqual(29);
    });

    it('outputs the correct largest prime factor for 600851475143', function() {
      expect(largestPrimeFactor(600851475143)).toEqual(6857);
    });
  });

});