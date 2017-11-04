from setuptools import setup, find_packages

setup(name='Batchman',
      version='0.1',
      description='A terminal micro service for data storage with batch processing',
      url='https://github.com/douglasrodrigues5/',
      author='Douglas Rodrigues',
      author_email='douglasrodriguesguima@gmail.com',
      license='MIT',
      packages=find_packages(),
	  include_package_data=True,
      entry_points={'console_scripts': ['batchman = src.batchman:main',],},
      zip_safe=False)